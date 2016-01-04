'use strict'

var model = {
	displayedCat: null,
	catArray: [
		"White Cat",
		"Mad Cat",
		"Contempletive Cat",
		"House Cat",
		"Cute Cat"
	],
	catData: [],
	init: function() {
		for (var i = 0; i < model.catArray.length; i++) {
			var htmlSrc = "http://lorempixel.com/440/380/cats/" + i;
			var obj = {
				name: model.catArray[i],
				src: htmlSrc,
				clicks: 0
			}
			model.catData.push(obj);
		};
		//initialized the array, and cat objects in the array
	}
};

var octopus = {
	//Solution more eloquently acheives this by setting a model.currentCat
	changeImageStatus: function(buttonID) {
		model.displayedCat = model.catData[buttonID];
		catView.render();
	},

	returnCat: function() {
		return model.displayedCat;
	},

	returnCatArray: function () {
		return model.catArray;
	},

	addClick: function() {
		var currentCatIndex = model.catData.indexOf(octopus.returnCat());
		model.catData[currentCatIndex].clicks += 1;
		catView.render();
	},

	init: function () {
		model.init();
		model.displayedCat = model.catData[0];
		buttonView.init();
		catView.init();
	}
};

var buttonView = {
	init: function () {
		var catArray = octopus.returnCatArray();
		for (var i = 0; i < catArray.length; i++) {
			var buttonID = "button" + i;
			var newButton = $("<button id ='" + buttonID + "'>" + catArray[i] + "</button>");
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
		this.img = $("#image")
		this.heading = $("#heading");
		this.clickSpan = $("#clicked");
		this.img.click(function() {
			octopus.addClick();
		});

		catView.render();
	},

	render: function() {
		var currentCatObj = octopus.returnCat();
		this.heading.text(currentCatObj.name);
		this.img.attr("src",currentCatObj.src);
		this.clickSpan.text(currentCatObj.clicks);
	}
};

octopus.init();










/*

*/

