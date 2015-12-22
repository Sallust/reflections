'use strict'

//$('.header').text('sup');
var count = 0;

var catArray = [
	"White Cat",
	"Mad Cat",
	"Contempletive Cat",
	"House Cat",
	"Cute Cat"];

var obj = {};



for (var i = 0; i < catArray.length; i++) {

	obj[catArray[i]]= 0;
	


	//make the div with the actual cat
	var elem = $('<div style="display: none;" id="cat'+ i + '"><h2>'+ catArray[i] + '</h2></div>');
	var img = '<img src="http://lorempixel.com/640/480/cats/'+ (i + 1)+'">'
	
	var clicked = "<h2>I've been clicked <span id='clicked'> 0 </span> times </h2>"
	var clickSpan = $('#clicked')
	$('#cats').append(elem.append(img,clicked));
	//elem.click(function(e){
		//obj
	//})

	elem.click((function(copy,spanCopy){
		return function() {
			obj[copy] += 1;
			spanCopy.text('testText');

		}
	})(catArray[i],clickSpan));

	elem.click((function(copy){
		return function(){
			copy.text(obj[catArray[i]]);
		}
	})(clickSpan))




	//make the list on the left
	var listElem = $('<li>'+catArray[i]+'</li>')
	$('#list').append(listElem);
	listElem.click((function(copy){
		return function() {
			copy.show();
		}
	})(elem))
};

function clickChange() {
	$()

}
//$('#heading1').text(cat1);
//$('#heading2').text(cat2);
/*
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
*/

