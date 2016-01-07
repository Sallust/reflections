var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/tabby.jpg');
	this.imgAttribution = ko.observable('http://www.flickr.com');

	this.catLevelArray = ["infant","toddler", "pre-teen", "annoying teen", "teen", "adolescent", "adult", "dead...awkward. You totally killed it"]

	this.catLevel = ko.computed(function() {
		return this.catLevelArray[Math.floor(this.clickCount()/10)];
	},this)

	this.nicknames = ko.observable(["The Cutest!!", "Almost as Cute", "As cute as Unicorn Smiles", "The Cat"])

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel())

//[Math.floor(this.clickCount / 10)