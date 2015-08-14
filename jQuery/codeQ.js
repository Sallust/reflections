//index of jQuery methods we've used
$(".class").append(HTMLcontent);  //appends content to beginning of element
$(".class").prepend(HTMLcontent); //same but at beginning
$(HTMLcontent).insertAfter(".class"); //inserts content After the closing tag of selected element
$(HTMLcontent).insertBefore(".class");

$(".class").html(); //RETURNS element's HTML content
$(".class").html(someHTML);   //completely replaces element's HTML

$(".articles").text(); //returns text of first element and descendants
$(".articles").find("h1").text(newTextstring) //replaces text of element

$("#some-image").attr("alt") // returns value of "alt"
$("#some-a-link").attr("href", "newLink") //Changes value of attribute

$(".class").addClass("newClass") //ADDS not replace a class to element
$(".featured").toggleClass("featured");  //toggles class on and off
$("#input").val()   //returns value of <input>

$("#child").remove(); //removes selector
$(".class").remove("#child")  //same effect

//Selectors
$(".class").parent();
$(".class").parents(); //selects ALL parents to origin
$(".class").children(); // selectsdirect children of selector
$(".class").find('*');  //selects ALL children of selector
$(".class").siblings();  //selects all siblings of selector

$(".featured").next()  //selects following sibling element
$(".articles").find("h1")  //looks for h1 tag within selected element and selects it
$(".featured").first()

//Function?
$("p").each(function() {
	//some code to execute for every matched element
})

//To Magically run code in a head script that effects the DOM
function someFunction() {
    // Do interesting things
}
$(someFunction)

//or

$(function(){
    // Do interesting things
})

// CODE FROM THE CLASS // CODE FROM THE CLASS // CODE FROM THE CLASS //
$(string)
$(function)
$(DOM Element)
$.ajax()  // simple method call on the jQuery object

//
// Hosting jQuery //
//jQuery official CDN
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
//from Google Developer library
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

//Using family selctors filters
var articleList, h1, kids, parents;
articleList = $('.article-list');
h1 = articleList.siblings('h1');
kids = articleList.find('*');   //universal selector
parents = articleList.parents('div');

//class toggling
var featuredArticle;
featuredArticle = $(".featured").toggleClass("featured"); //I'd prefer to ID the class and use that to select. Seems like you're removing the selctor here so you can't really toggle it after the first time...

//Take Featured class from 2 and add it to 3
article3 = $(".featured").next().addClass("featured");
article2 = $("#art2").toggleClass("featured");

//Their Answer
var article2, article3;
article2 = $(".featured");
article3 = $(".featured").next();

article2.toggleClass("featured");
article3.toggleClass("featured");

//add #1 attribute to a:first
var navList;
navList = $("a:first");
navList.attr("href", "#1");

//Their Answer to adding #1 attribute
var navList, firstItem, link;
navList = $('.nav-list');
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href', '#1');

//Using Jquery to change font size
var articleItems;
articleItems = $(".article-item");
articleItems.css("font-size", "20px");

//Magically changing a header element to match an input element
//includes an event listener that executes when input is changed


$('#input').on('change', function() {
    var val;
    val = $("#input").val();
    var title = $(".articles").find("h1");
    title.text(val);
});

//Quiz remove ul
var articleItems;
articleItems = $(".article-item");
articleItems.find("ul").remove(); //worked because it was the only ul. Still seems dangerous

//Creation of new DOM elements
var familyHTML = "<div id='family2'><h1>Family2</h1></div>";
var bruceHTML = "<div id='bruce'>Bruce</div>";
var madisonHTML = "<div id='madison'>Madison</div>";
var hunterHTML = "<div id='hunter'>Hunter</div>";
var family1;
family1 = $("#family1");
$(familyHTML).insertAfter(family1);
$("#family2").append(bruceHTML);
$("#bruce").append(madisonHTML+hunterHTML);

//using each and $(this)
$('.example').each(function(){
	$(this).text(); //JUST returns the text of the element minus the jQuery crap
})

//Adding number of characters in an element to the end of the element
$("p").each(function() {
    length = $(this).text().length;
    $(this).append(length);
    });

//Their Solution
function numberAdder() {
	var text, number;
	text = $(this).text();
	number = text.length;
	$(this).text(text + " " + number);
}
//$(function)
function someFunction() {
    // Do interesting things
}
$(someFunction)

//or

$(function(){
    // Do interesting things
})


//Final Quiz: Manipulating DOM from a head script : Mind Blown
function puppies(){
	imagex = $(".article-item").find("img")
	imagex.attr("src", "http://placekitten.com/350/150" )

};

$(puppies)










