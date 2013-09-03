var http = require('http');
var twitter = require('twit');


var requestListener = function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

  var t = new twitter({
        consumer_key : process.env.consumer_key,
        consumer_secret :  process.env.consumer_secret,
        access_token :  process.env.access_token,
        access_token_secret : process.env.access_token_secret
      });
  t.get('statuses/user_timeline', {screen_name: 'ppiplewar' , count: 2} , function(err, resp){
    if (err) console.log(err);
     res.end(JSON.stringify(resp));
  });
};

var server = http.createServer(requestListener);
server.listen(8080);