/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
(function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());


/* STUDENT APPLICATION */
$(function() {
    var model = {
        attendance: JSON.parse(localStorage.attendance)
    };
    var octopus = {
        getAttendance: function() {
            return model.attendance;
        },
        getNumber: function(array){
            var total = 0;
            for (var i = 0; i < array.length; i++) {
                if (!array[i]) {
                    total++;
                }
            };
            return total
        },
        update: function(index,student) {
            //console.log(index,student);


            model.attendance[student][index] = !model.attendance[student][index];
            console.log(!model.attendance[student][index])

            var newTotal = octopus.getNumber(model.attendance[student]);
            view.update(student,newTotal);

        },
        countBoxes: function() {

        },
        toggle: function(ID) {

        }

    };
    var view = {
        init: function() {
            var attendance = octopus.getAttendance();
            console.log(attendance);


            this.tableBody = $("#table-body");
            this.topRow = $("#top-row");

            //for (var i = 0; i < Things.length; i++) {
                //Things[i]
            //};

            //var tableRow = $()

            //1-12 in top row
            this.tableBody.append()
            for (var i = 1; i <=12 ; i++) {
                var number = "<th>"+ i + "</th>"
                this.topRow.before(number);
            };
            //console.log(attendance);
            for (student in attendance) {
                if (attendance.hasOwnProperty(student)) {
                    var tr = $('<tr class="student"></tr>');
                    var studentHTML = '<td class="name-col">' + student + '</td>';
                    tr.append(studentHTML);
                    //console.log(attendance[student]);

                    console.log(tableCheckbox);

                    var checked = '<td class="attend-col"><input type="checkbox" checked></td>';
                    var unchecked = '<td class="attend-col"><input type="checkbox"></td>';
                    console.log(attendance[student]);
                    for (var i = 0; i < attendance[student].length; i++) {
                        var td = $('<td class="attend-col"></td>');
                        var checkbox = $('<input type="checkbox">');
                        checkbox.click((function(i,student) {
                            return function () {
                                //console.log(i,student)
                                octopus.update(i,student);
                            }
                        })(i,student))
                        if (attendance[student][i]) {
                          checkbox.prop("checked", true);
                          console.log("it's all true!")
                        }


                        var tableCheckbox = td.append(checkbox);

                        tr.append(tableCheckbox);



                    };
                    var total = octopus.getNumber(attendance[student]);
                    var totalHTML = '<td class="missed-col">'+ total +'</td>';
                    tr.append(totalHTML);

                    this.tableBody.append(tr);
                    console.log(student)
                };
            }

            $('.attend-col').click(function() {
                octopus.update();
            })



        },
        update: function(student,newTotal) {
            var currentStudent = $("td:contains('"+ student +"')");
            currentStudent.siblings().last().text(newTotal);
            //console.log(currentStudent.text());

        }
    };






    var attendance = JSON.parse(localStorage.attendance);
    var  $allMissed = $('tbody .missed-col');
    var $allCheckboxes = $('tbody input');
    //console.log(attendance);
    //console.log(attendance["Slappy the Frog"]);
    // Count a student's missed days
    function countMissing() {
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

    // Check boxes, based on attendance records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    // When a checkbox is clicked, update localStorage
    /*
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });
*/
    countMissing();
    view.init();

}());
