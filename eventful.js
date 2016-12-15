//common resource that would be used is the location of the user//
//the goal first is to when the user loads up the data, then the user would be asked to share the information that would allow the browser to access they're location that would help the app to determine specifically based on they're location//

// the page would always be on standby for the user to open his information
$(document).ready(function(){
var x = document.getElementById('hello');
console.log(x);
// var x = response
//it would then store the coordinates in those variables


});

//this function would help the app determine his or her location//

// console.log(response);
// var x = document.getElementById('logo');
var eventLatitude;
var eventLongitude;
var queryURLBase = "https://api.eventful.com/rest/events/search?app_key=F5znJBwm4mjSDtQc&location=("+eventLatitude+","+eventLongitude+")&category=family_fun_kids"
	getLocation();

function getLocation(){

	// console.log(navigator.geolocation.getCurrentPosition)
	if (navigator.geolocation){
		console.log('geo available')
		var y = navigator.geolocation.getCurrentPosition(x);
		console.log(y);
		navigator.geolocation.getCurrentPosition(showPosition);
        

	}
	else{
		//incase the browser does not allow the location is//
		console.log("geolocation is not supported by this browser");
	    }
    }


//it store the location object and show in the html//
function showPosition(position){
	console.log(position);
	// x.innerHTML = console.log("latitude: "+ position.coords.latitude + "<br>Longitude: "+ position.coords.longitude);
	eventLatitude = position.coords.latitude;
    console.log(eventLatitude);//this is to test the values are defined//
	// $('#yelp').append(foodLatitude);
	// $('#yelp').append(foodLongitude);

	eventLongitude = position.coords.longitude;
    console.log(eventLongitude)
    };
    //this is to test the values are defined//

// using the location data then we will use the API to find the data that we are looking for //
// $.ajax({url: queryURLBase, method: 'GET'}).done(function(response){
// 	console.log(queryURLBase);
// 	var results = response.data;
// 	console.log(response);

// 	for (var i = 0; i <results.length; i++)
// 	{
// 		var img = $('<img>');//this will push the image result from api and store in there//
// 		var thingDiv = $('<div>');//to create a div section//
// 		var visual = results[i].image.medium.url;//the image search results would be seen//
// 		var addressStreet = results[i].venue.address;
// 		var addressCity = results[i].venue.city_name;
// 		var addressState = results[i].venue.region_abbr;
// 		var title = results[i].title;
// 		var description = results[i].description;



// 	}
// })


    

//This is the events page would be formed//
