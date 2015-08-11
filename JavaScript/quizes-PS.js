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
