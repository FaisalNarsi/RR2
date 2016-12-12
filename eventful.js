//common resource that would be used is the location of the user//
//the goal first is to when the user loads up the data, then the user would be asked to share the information that would allow the browser to access they're location that would help the app to determine specifically based on they're location//

// the page would always be on standby for the user to open his information
$(document).ready(function(){
    getLocation();
});

//this function would help the app determine his or her location//
function getLocation(){
// console.log(response);
//it would pull the information from the food html page//
// var x = document.getElementById('logo');
var x = $(document).load('#homePageInfo');
console.log(x);
// var x = response
//it would then store the coordinates in those variables
var eventLatitude;
var eventLongitude;

function getLocation(){

	// console.log(navigator.geolocation.getCurrentPosition)
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition)
        

	}
	else{
		//incase the browser does not allow the location is//
		x.innerHTML = console.log("geolocation is not supported by this browser");
	    }
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



    

//This is the events page would be formed//
