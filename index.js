var express = require("express");
var request = require("request");
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: "QX6AnsA4NRlYlCLUVFziIw",
  consumer_secret: "Rr8vgooT0PXeq_0H4bXFppd_nsY",
  token: "ZT3pl3vqniQ_Q8V40yf07l5FXRxY-fQt",
  token_secret: "o1gvIqxMeJx0gXQrzNkkleOKEKE"
});

// Put your Edamam APP_ID here
var app_id = "";
// PUT YOUR Edmam API_KEY here
var api_key = "";
var app = express()

// This will serve up any static files in the public folder
app.use(express.static('public'));

// This allows Cross-Origin Requests to our server
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Make sure everything works right
// app.get('/', function(req, res){
//     res.send("Hello world");
// });

// Make a get call to the edamam api
// Make sure you set app_key and api_key up above
app.get('/api/eventful/:eventLat/:eventLng', function(req, res){
    var responseData;
    request(
      { method: 'GET'
      , uri: "https://api.eventful.com/json/events/search?q=events&category=family_fun_kids&app_key=F5znJBwm4mjSDtQc&location=("+ req.params.eventLat+","+req.params.eventLng+")/"
      }
    , function (error, response, body) {
        // body is the decompressed response body
        console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'));
        console.log('the decoded data is: ' + body);
        res.json(body);
    });
});

// app.get('/', function (req, res) {
//  res.send('hello world');
// })

app.get('/yelp/search', function (req, res) {
  yelp.search(req.query)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      console.log(err);
    });
})

app.listen(process.env.PORT || 3000, function () {
  console.log('example app listening on port')
  console.log ("This app is listening on port 3000");

})