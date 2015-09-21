//prototype Chains
var gold = {a:1};
var blue = extend({}, gold);

var rose = Object.create(gold);
rose.b = 2;







//library.js
var Car = function(loc) {
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
};

Car.prototype.move = function(){
	this.loc++;
};


//Example to illustrate this Example has same relationship w/ prototype object as does Car
var Example = function(){
	return Object.create(Car.prototype);
};
console.log(Car.prototype.constructor);
console.log(amy.constructor); //same result because failed lookup points to Car.prototype which has Car object as its constructor

log(amy instanceof Car);

//instanceof  com


//before prototype
var Car = function(loc) {
	var obj = {loc: loc};
	extend(obj, methods);
	return obj;
};

Car.methods = {
	move : function() {
		this.loc++;
	}
};


//before prototype



//var move = function(){
//	this.loc++;
//}





//run.js
var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();



//Psuedoclassical Patterns
var Car = function(loc) {
	(this = Object.create(Car.prototype);  ) //magical line that runs because of keyword this
	this.loc = loc;    //really?!? This?!? in this case it's the object being created
	(return this)   //another magical line of code

Car.prototype.move = function(){
	this.loc++;
};


var amy = new Car(1);
amy.move();
var ben = new Car(9);
ben.move();


//Functional Superclass

var Car = function(){    //Superclass
	var obj = {loc:loc};
	obj.move = function(){
		obj.loc++;
	};
	return obj
}

var Van = function(loc){
	var obj = Car(loc);
	obj.grab = function{/*...*/};
	return obj;
};

var Cop = function(loc){
	var obj = Car(loc);
 	obj.call = function() {/*...*/};
 	return obj
}
/*run.js*/
var amy = Van(1);
amy.move();
var ben = Van(9);
ben.move();
var cal = Cop(2);
cal.move();
cal.call();

//Psuedoclassical Subclasses
/*library.js*/
var Car = function(loc) {
	this.loc = loc;
};

Car.prototype.move = function(){
	this.loc++;
};

var Van = function(loc){
	(this = Object.create(Van.prototype)) //imaginary line of code
	Car.call(this, loc); //sets the correct scope in which to run Car

}
(Van.prototype.__proto__ = Car.prototype) //Not allowed
Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() {/*....*/}



/*run.js*/
var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();







