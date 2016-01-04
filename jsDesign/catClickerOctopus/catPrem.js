'use strict'

var model = {
	displayedCat: null,
	adminView: false,
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
	},
	addCat: function(newCat, newUrl,newClicks) {
		var htmlSrc = "http://lorempixel.com/440/380/cats/" + newUrl;
		var obj = {
			name: newCat,
			src: htmlSrc,
			clicks: newClicks
		}
		model.catData.push(obj);
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
	openAdmin: function() {
		model.adminView = true;
		adminView.render();

	},
	updateAdmin: function() {
		model.adminView = false;
		console.log("sup");
		adminView.capture();
		adminView.hideView();
	},
	closeAdmin: function() {
		model.adminView = false;
		console.log("sup2");
		adminView.hideView();
	},
	process: function(newCat, newUrl,newClicks) {
		model.catArray.push(newCat);
		buttonView.init();

		model.addCat(newCat, newUrl,newClicks);

		model.displayedCat = model.catData[model.catData.length - 1];

		catView.render();
		console.log(model.catData);

	},

	init: function () {
		model.init();
		model.displayedCat = model.catData[0];
		buttonView.init();
		catView.init();
		adminView.init();

	}
};

var buttonView = {
	init: function () {
		$("#buttonList").html("");
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
	}

};

var catView = {
	init: function() {
		this.img = $("#image");
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

var adminView = {
	init: function() {
		this.admin = $("#admin");
		this.catForm = $("#cat-form");
		this.name = $("#name");
		this.url = $("#url");
		this.clicks = $("#clicks");
		this.cancel = $("#cancel");
		this.submit = $("#submit");



		//admin click listener
		this.admin.click(function () {
			octopus.openAdmin();
		});

		//save click listener
		this.submit.click(function() {
			octopus.updateAdmin();
		})
		//cancel click listener
		this.cancel.click(function() {
			octopus.closeAdmin();
		})

	},
	render: function() {
		this.catForm.show();
	},
	hideView: function() {
		this.name.val(""); this.url.val(""); this.clicks.val("");
		this.catForm.hide();
	},
	capture: function() {
		var newCat = this.name.val();
		var newUrl = this.url.val();
		var newClicks = parseInt(this.clicks.val(), 10);
		octopus.process(newCat,newUrl,newClicks);
	}


}

octopus.init();










/*

*/

