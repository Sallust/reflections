//Here is all the Java Code I've written
//This is a better thought out attempt to save code to be easily referenced
//instead of the previous google doc that due to lack of formatting
//was really hard to read and thus use


console.log("Hello world!");	//prints "hello world" in console

document.URL //returns string of url

//playing w/ JQuery intro
$(".super-header-wrapper").html("<img style='width:100%' src='http://goo.gl/WCrBmS'>");
$("#header").append()
$("#main").append("Danny Haile");

if(resume.content===""){	//why everything appears blank on resume page at first
	hideResume();
}

var firstName = "Danny";	//My first variable

var string = "apple"

string.replace(old,new)	//
string.slice(1,[end]) // "pple"
string.split(separator) // yields array of str separated by separator
string.toUpperCase()
string.toLowerCase()

var udacityizer = function(s) { 	//takes as input a string like audacity
	s = s.slice(1)					//returns "udacity"
	return s;

var formattedName = HTMLheaderName.replace("%data%",name);
//creating formatted version of name based on helper.js
$("#header").prepend(formattedName); //prepends to header tag

var skills = ["awesomness","amazingness","JS","HTML","CSS"]
$("#main").append(skills);
$("#main").append(skills[0]);	//displays "awesomness"	on page

var array = ["apples", "oranges", "kiwis"]
array.length //length of array
array.push("pineapple") // adds pineapple element
array.pop() // would remove the recently added pineapple
//ALSO returns "pineapple"
array.join(separator) // creates string from array elements separated by separator

var bio = {
    "name" : "Danny",
    "age" : 32,
    "skills" : skills
}

bio.city = "Washington DC"; //declaring the object bio and adding new property
bio.email = "daniyom@gmail.com";
//OR
bio["city"] = "Washington DC"; //alternate syntax for declaring and adding properties
bio["email"] = "daniyom@gmail.com"

// JSON

var family = [{
    "name" : "Jason",
    "age" : "24",
    "gender" : "male"
},
{
    "name" : "Kyle",
    "age" : "21",
    "gender" : "male"
}];

document.write(family[1].name); // Output: Kyle

var family = {
    "jason" : {
        "name" : "Jason Lengstorf",
        "age" : "24",
        "gender" : "male"
    },
    "kyle" : {
        "name" : "Kyle Lengstorf",
        "age" : "21",
        "gender" : "male"
    }
}

document.write(family.jason.name); // Output: Jason Lengstorf
document.write(family.kyle.age); // Output: 21


//Their JSON using arrays
var education = {
    "schools": [
    {
        "name": "Harvard University",
        "city": "Cambridge, MA",
        "degree": "BA",
        "major": "Economics"
    },
    {
        "name": "University of California Berkeley",
        "city": "Berkeley, CA",
        "degree": "coursework",
        "major": "Accounting"
    }
    ]
}