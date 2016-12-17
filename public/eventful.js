window.onload=getlocation;


// queryURL = "https://api.eventful.com/rest/events/search?app_key=F5znJBwm4mjSDtQc&location=("+ eventLat+","+eventLng+")&category=family_fun_kids/"
var eventLat;
var eventLng;
function getlocation(){
    if (navigator.geolocation)
    {
        console.log('true');
        $('#searchBar').hide();
        
       

        navigator.geolocation.getCurrentPosition(displayPosition);
    }
    else
    {
        console.log("sorry your not allowed");
       
    }
}
function displayPosition(position){
    eventLat = position.coords.latitude;
    console.log(eventLat);//to simply check if the code works
    eventLng = position.coords.longitude;
    console.log(eventLng);//to simply check if the code works
    // setTimeout(callajax(),1000);
// queryURL = "https://api.eventful.com/rest/events/search?app_key=F5znJBwm4mjSDtQc&location=("+ eventLat+","+eventLng+")&category=family_fun_kids/"
    queryURL= "http://localhost:3000/api/eventful/"+eventLat+"/"+eventLng;
    $.ajax({url: queryURL, method: "GET"}).done(function(response){

            var result = response;
            // console.log(response);
            // console.log(result);
            var jason =JSON.parse(result);
            console.log(jason);
            var jason2 = jason.events.event;
            console.log(jason2);

            for (var i = 0; i<jason2.length; i++){
                        var eventPic = jason2[i].image.url;
                        console.log(eventPic);
                        console.log(jason2.length);
                        var eventDes = jason2[i].description;
                        var prefix = "http:"
                        var newEventPic = prefix + eventPic;

                        var picURL= "http:"+ eventPic[i];
                        console.log(picURL);
                        var ePic = $("<img src="+picURL+"id='searchPic'>");
                        var ePic = $("<img class='searchPic'>");
                        var eOut = $('<p id="description">'+jason2[i].description+'</p>');
                        var address = jason2[i].venue_address;
                        var city =  jason2[i].city_name;
                        var state = jason2[i].region_abbr;
                        var info = jason2[i].venue_url;
                        console.log(address);
                        var time = jason2[i].start_time;
                        var newTime = moment(time).format("MM/DD/YYYY" , "hh:mm");
                        console.log(newTime);



                        ePic.append(eOut);
                        ePic.attr('src',jason2[i].image.url);
                //      ePic.attr('id', searchPic);
//                      console.log(ePic);
//                      console.log(eOut);
                        $('#detail').append(ePic);
                        $('#detail').append(eOut);
                        $('#detail').append("<p> Location: "+address+",   "+city+state+"</p>");
                        $('#detail').append("<p>When:" +newTime+"</p>");
                        $('#detail').append('<p> For more information click here:'+'<a href='+info+">link</a></p>");
                // $('#detail').append(eOut);
//




                        }
            // var eventPic = jason.events.event[0].image.medium.url;
            // console.log(eventPic)
            // $('.12u').html(eventPic);
            })

    }
// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             console.log("User denied the request for Geolocation.");
//             $('#searchBar').fadeIn(2000);
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.log("Location information is unavailable.");
//             $('#searchBar').fadeIn(2000);
//             break;
//         case error.TIMEOUT:
//             console.log("The request to get user location timed out.");
//             $('#searchBar').fadeIn(2000);
//             break;
//         case error.UNKNOWN_ERROR:
//             console.log("An unknown error occurred.");
//             $('#searchBar').fadeIn(2000);
//             break;
//     }
// }

//this function would run in case the user decideds to search via zip code//
// $('#enter').on('click', function(){
// var entered = $('#other').val();
// getzip(entered);
// console.log(entered);



// })

// function getzip(entered){
//     var location = entered;
//      queryURL= "http://localhost:3000/api/eventful/"+location;
//     $.ajax({url: queryURL, method: "GET"}).done(function(response){

//             var result = response;
//             // console.log(response);
//             // console.log(result);
//             var jason =JSON.parse(result);
//             console.log(jason);
//             var jason2 = jason.events.event;
//             console.log(jason2);

//             for (var i = 0; i<jason2.length; i++){
//                         var eventPic = jason2[i].image.url;
//                         console.log(eventPic);
//                         console.log(jason2.length);
//                         var eventDes = jason2[i].description;
//                         var prefix = "http:"
//                         var newEventPic = prefix + eventPic;

//                         var picURL= "http:"+ eventPic[i];
//                         console.log(picURL);
//                         var ePic = $("<img src="+picURL+"id='searchPic'>");
//                         var ePic = $("<img class='searchPic'>");
//                         var eOut = $('<p id="description">'+jason2[i].description+'</p>');
//                         var address = jason2[i].venue_address;
//                         var city =  jason2[i].city_name;
//                         var state = jason2[i].region_abbr;
//                         var info = jason2[i].venue_url;
//                         console.log(address);
//                         var time = jason2[i].start_time;
//                         var newTime = moment(time).format("MM/DD/YYYY" , "hh:mm");
//                         console.log(newTime);



//                         ePic.append(eOut);
//                         ePic.attr('src',jason2[i].image.url);
//                 //      ePic.attr('id', searchPic);
// //                      console.log(ePic);
// //                      console.log(eOut);
//                         $('#detail').append(ePic);
//                         $('#detail').append(eOut);
//                         $('#detail').append("<p> Location: "+address+",   "+city+state+"</p>");
//                         $('#detail').append("<p>When:" +newTime+"</p>");
//                         $('#detail').append('<p> For more information click here:'+'<a href='+info+">link</a></p>");
//                 // $('#detail').append(eOut);
// //




//                         }

//     })
// // queryURL = "https://api.eventful.com/rest/events/search?app_key=F5znJBwm4mjSDtQc&location=("+ eventLat+","+eventLng+")&category=family_fun_kids/"
// // app.use(function(req,res,next){
// //     res.header("Access-Control-Allow-Origin",'*');
// //     res.header("Access-Control-Allow-Origin",'*');
// // })
// // function callajax(){
// // $.ajax({url: queryURL, method: "GET"}).done(function(response){

// //     var eventData = response.data;
// //     console.log(response);
// // })
//     };
