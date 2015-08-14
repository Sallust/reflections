$(string)
$(function)
$(DOM Element)
$.ajax()  // simple method call on the jQuery object


//
// Hosting jQuery

//jQuery official CDN
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>

//from Google Developer library
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

//Using family selctors
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings('h1');

kids = articleList.find('*');

parents = articleList.parents('div');


//class toggling
var featuredArticle;

featuredArticle = $(".featured").toggleClass("featured");


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

console.log(navList);

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

articleItems.find("ul").remove();
//Creation of new DOM elements
var familyHTML = "<div id='family2'>Family2</div>";
var bruceHTML = "<div id='bruce'>Bruce</div>";
var madisonHTML = "<div id='madison'>Madison</div>";
var hunterHTML = "<div id='hunter'>Hunter</div>";

var family1;

family1 = $("#family1");

$(familyHTML).insertAfter(family1);

$("#family2").append(bruceHTML);
$("#bruce").append(madisonHTML+hunterHTML);