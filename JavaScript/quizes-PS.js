//Quizes during JavaScript Course
var udacityizer = function(s) {       //takes "audacity" returns "Udacity"
	s = s[1].toUpperCase() + s.slice(2);
	return s
}



//Problem Set 1 - take array and return last element plus 1 (w/in a function)
newArray = _array
newArray.push(_array.pop() +1)	//my solution using the tricky .pop

newArray = _array.slice(0);	     //their solution
var lastNumber = newArray.pop();
newArray.push(lastNumber + 1);

//Quiz #2 - take as input 2 aLbERt EinsTEIN and return "Albert Einstein"
function nameChanger(oldName) {
	var finalName = oldName;
    var NameArray = oldName.split(" ");
    var firstInitial = NameArray[0][0].toUpperCase();
    var firstName = NameArray[0].slice(1).toLowerCase()+" ";
    var secondInitial = NameArray[1][0].toUpperCase();
    var lastName = NameArray[1].slice(1).toLowerCase();
    finalName = firstInitial + firstName + secondInitial + lastName;

return finalName
}
//Their solution
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

//Create Bio Object
var bio = {
	"name" : "Danny",
	"role" : "Front-End Ninja in Training",
	"contacts" : {
		"mobile" : "240-476-7892",
		"email": email,
		"github" : "Sallust",
		"twitter" : "@SallustV",
		"location" : "Washington DC"
	},
	"welcome" : "Welcome to the awesomness that is my resume",
	"pictureURL" : "images/me.jpg",
	"skills" : skills
 };

 // More work with object syntax
var work = {};
work.currentjob ="being full-time fabulous"; //dot notation
work.employer = "Best boss in the world";
work.yearsworked = 4;
work.city = "Washington DC";

var education = {};
education["school"] = "Harvard University";
education["years"] = "2000-2005";
education["city"] = "Cambridge, MA"

$("#main").append(work["currentjob"]);   //N.B. that properties are being called using alternate notation

$("#main").append(education.school);

//JSON assignment
var education = {
	"Harvard" : {
		"name" : "Harvard University",
		"city" : "Cambridge, MA",
		"major" : "Economics",
		"years" : "2000-2005"
	},
	"UCB" : {
		"name" : "University of California, Berkeley",
		"city" : "San Francisco, CA",
		"major" : "Accounting",
		"years" : "Summer 2004"
	}
}

//Code from resumeBuilder.js first lesson... mostly tests and examples
var name = "Danny Haile";
var role = "Front-End Web Developer";

var awesomeThoughts = "I am pretty awesome! How awesome you wonder?";

console.log(awesomeThoughts);

console.log("Mind Blown!");

var email = "daniyom@gmail.com";

var funThoughts = awesomeThoughts.replace("awesome","fuckin awesome");

//Using Replace 'function
var formattedName = HTMLheaderName.replace("%data%",name);

var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contact);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);

var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);

var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").append(formattedPicture);

$("#topContacts").append(formattedContact);

$("#header").append(formattedWelcome);

$("#header").append(formattedSkills);

$("#main").append(bio.name);

//Removing "<" console.log(charEscape(html));
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    newHTML = _html.replace(/</g,"&lt").replace(/>/g,"&gt");

    return newHTML;
};
//Can you access property using DOT, or Bracket notation
var weirdObject = {
    "property": true, true,
    "property1": true,true
    "property-2": false, true
    "property 3": false, true
    "property$": true, true
    " property": false, true
    "property()": false,true
    "property[]": false,true
    "8property": false, true
};

// create a function that takes as input
//the work object and returns an array of locations
//my answer
function locationizer(workObj) {
    var locationArray = [];
    for (job in workObj.jobs) {
        locationArray.push(workObj.jobs[job].location);
    }
    return locationArray
}
//Their answer. Of note, the names are really similar. Also, they created a variable newLocation
//which makes code easier to read
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray
}
//internationalize Name Quiz... again but w/ a cleaner answer
function inName() {
	names=name.split(" ");
	names[1] = names[1].toUpperCase;
	names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
	return names[0] + " " + names[1]
}

//Encapsulating Functions
projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		var formattedImages = ""
		for (image in projects.project[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
			formattedImages = formattedImages + formattedImage;
		}
		$(".project-entry:last").append(formattedTitle+formattedDate+formattedDescription+formattedImages);
	}
}

//New syntax
$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);  // It's taking as it's paramater an
     //Anonymous function

});

//
//   Problem Set 2
//


//Working with Scope: Local vs Global
var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example();
console.log(outsideExample); // "First string"

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample); // "Second string"

// Block Level Scope
var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string";
    console.log(outsideExample); //Second String
}
console.log(outsideExample); //Second String

//Function Declaration syntax
example1();
function example1() {
    console.log("Ran the example");
} //WIN!

example2();
var example2 = function() {
    console.log("Ran the example");
} //FAIL :(


//Adding infoWindow to map on resume
google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker); //This is the part we had to find by reading documentation
    });


//
// Bonus Questions
//
function getRelationship(x, y) {
    if (isNaN(x) && isNaN(y)) {
        return "Can't compare relationships because "+ x + " and " + y + " are not numbers";
    }
    else if (isNaN(x)) {
        return "Can't compare relationships because " + x +" is not a number";
    }
    else if (isNan(y)) {
        return "Can't compare relationships because " + y +" is not a number";
    }
    else if (x < y) {
        return "<";
    }
    else if (x > y) {
        return ">";
    }
    else if (x === y) {
        return "=";
    }
};

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];


function alphabetizer(namesB) {
    standardizedNames = standardize(namesB);
    standardizedNames = standardizedNames.sort();
  //  while (isOrdered(standardizedNames) === false) {
     //   for (index in namesB) {
       //     compare(namesB,index);

   //     }








  //  }
    return standardizedNames;

}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
//var testArray = ["cat","arm"];


function compare(myArray, a) {
    holdA = myArray[a];
    if (myArray[a]>myArray[a+1]) {
        myArray[a] = myArray[a+1];
        myArray[a+1] = holdA;
    }
    else {
        myArray[a] = myArray[a];
    }

}
var testing = ['Conrad, Pete', 'Bean, Alan','Shepard, Alan' ];
compare(testing,0);
//console.log(testing);
//    myArray[index0] = (myArray[index_0]>myArray[index_1]) ?
 //   if (myArray[index_0]>myArray[index_1]) {


 //   if (myArray[index_0]<myArray[index_1]) {
 //       return
//    }
 //   else {
//        return [myArray[0], myArray[1]];
 // }
//}

//function swap(a,b) {
   // if (a<b) {
      //  return

function standardize(nameArray) {
    newArray = [];
    for (names in nameArray) {
        orderedName = nameArray[names].split(" ").reverse().join(", ");
        newArray.push(orderedName);
    }

    return newArray;
}

function isOrdered(myArray) {
    length = myArray.length;
    for (var i = 0; i < length; i++) {
        if (myArray[i]>myArray[i+1]) {
            return false;
            break;
        }

     }
    return true;
};

var testArray3 = [7,3,1];

//compare(testArray3,1);

 //console.log(testArray3);



