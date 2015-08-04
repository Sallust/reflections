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
