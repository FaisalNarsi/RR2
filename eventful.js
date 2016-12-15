window.onload=getlocation;


// queryURL = "https://api.eventful.com/rest/events/search?app_key=F5znJBwm4mjSDtQc&location=("+ eventLat+","+eventLng+")&category=family_fun_kids/"
var eventLat;
var eventLng;
function getlocation(){
	if (navigator.geolocation)
	{
		console.log('true');
		
		navigator.geolocation.getCurrentPosition(displayPosition);
	}
	else
	{
		console.log("its not showing me object location");
	}
}
function displayPosition(position){
	eventLat = position.coords.latitude;
	console.log(eventLat);//to simply check if the code works
	eventLng = position.coords.longitude;
	console.log(eventLng);//to simply check if the code works
	// setTimeout(callajax(),1000);
queryURL = "https://api.eventful.com/rest/events/search?app_key=F5znJBwm4mjSDtQc&location=("+ eventLat+","+eventLng+")&category=family_fun_kids/"
	
	$.ajax({url: queryURL, method: "GET"}).done(function(response){

	var eventData = response.data;
	console.log(response);
})

}
queryURL = "https://api.eventful.com/rest/events/search?app_key=F5znJBwm4mjSDtQc&location=("+ eventLat+","+eventLng+")&category=family_fun_kids/"
// app.use(function(req,res,next){
// 	res.header("Access-Control-Allow-Origin",'*');
// 	res.header("Access-Control-Allow-Origin",'*');
// })
// function callajax(){
// $.ajax({url: queryURL, method: "GET"}).done(function(response){

// 	var eventData = response.data;
// 	console.log(response);
// })
// }