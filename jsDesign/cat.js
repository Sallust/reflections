'use strict'

//$('.header').text('sup');
var count = 0;
var cat1 = "White Cat";
var cat2 = "Mad Cat";

$('#heading1').text(cat1);
$('#heading2').text(cat2);

$('#cat1').click(function(e) {
	count += 1
	$('#clicked').text(count);

})

$('#cat2').click(function(e) {
	count += 1
	$('#clicked').text(count);

})


var nums = [1,2,3];
for (var i = 0; i < nums.length; i++) {

	var num = nums[i];
	var elem = $('<p id="'+ num + '">'+ num + '</p>')
	$('.closure').append(elem);

	elem.click((function(numCopy){
		return function () {
			alert(numCopy)
		};
	})(num));



};

