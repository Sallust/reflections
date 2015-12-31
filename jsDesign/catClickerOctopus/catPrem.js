'use strict'


var buttons = [
			"White Cat",
			"Mad Cat",
			"Contempletive Cat",
			"House Cat",
			"Cute Cat"
			]

var model = {

	catData: [],
	init: function() {
		for (var i = 0; i < buttons.length; i++) {
			var htmlSrc = "http://lorempixel.com/440/380/cats/" + i;
			var obj = {
				name: buttons[i],
				src: htmlSrc,
				clicks: 0,
				imgDisplay: false
			}
			model.catData.push(obj);
		};
		model.catData[0].imgDisplay = true;
		//initialized the array, and cat objects in the array
		//initialize buttons
	}
};

var octopus = {
	changeImageStatus: function(buttonID) {
		for (var i = 0; i < model.catData.length; i++) {
			model.catData[i].imgDisplay = false;
		};
		model.catData[buttonID].imgDisplay = true;
		catView.render();
	},

	returnCat: function() {
		for (var i = 0; i < model.catData.length; i++) {
			if (model.catData[i].imgDisplay == true) {
				return model.catData[i];
			}
		};
	},
	addClick: function() {
		var currentCatIndex = model.catData.indexOf(octopus.returnCat());
		model.catData[currentCatIndex].clicks += 1;
		catView.render();

	},

	init: function () {
		model.init();
		buttonView.init();
		catView.init();
	}
};

var buttonView = {
	init: function () {
		for (var i = 0; i < buttons.length; i++) {
			var buttonID = "button" + i;
			var newButton = $("<button id ='" + buttonID + "'>" + buttons[i] + "</button>");
			
			newButton.click((function(i){
				return function() {
					octopus.changeImageStatus(i);
				}
			})(i));
			$("#buttonList").append(newButton);
			
		};
		//draw the buttons
		//on click sends data to octopus 
	},

};

var catView = {
	init: function() {

		var img = $("#image");
		img.click(function() {
			octopus.addClick();
		});

		catView.render();
	},

	render: function() {
		var currentCatObj = octopus.returnCat();

		var heading = $("#heading");
		var img = $("#image");
		var clickSpan = $("#clicked");

		heading.text(currentCatObj.name);
		img.attr("src",currentCatObj.src);
		clickSpan.text(currentCatObj.clicks);
	}
};

octopus.init();










/*

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

