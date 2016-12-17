$(document).ready(function(){
    
});


function index() {
	$("div")
};

var x = document.getElementByID('index');
console.log(x);


var term = "sushi";
var location ="Houston";

// var url = "/yelp/search?term=" + "sushi" + "&location=" + location;
var url = "http://api/yelp/"+ location; 

$.ajax({url: url, method: "GET"}).done(function(response){

	var result = reponse;
	console.log(result);

for (var i = 0; i <results.length; i++)

	{
	
		var img_url = $('<img>');//this will push the image result from api and store in there//
		var thingDiv = $('<div id="info">');//to create a div section//
		var visual = results[i].image_url;//the image search results would be seen//
		var addressStreet = results[i].venue.address;
		var addressCity = results[i].location.city;
		var addressState = results[i].location.state_code;
		var title = results[i].name;
		var description = results[i].description;

		thingDiv.append(addressStreet);
		$("#detail").append(thingDiv);

	};

		
});


	














