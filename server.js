//creates a server that listens on port 7000 and responds with an inspirational message about the day.
var http = require("http");
var PORT1 = 7000;

function requestHandler1(req, res)
{
  res.end("The day has 24 hours for you to accomplish your heart's desires.");
}

var server1 = http.createServer(requestHandler1);

server1.listen(PORT1, function() {
  console.log("Server listening on " + PORT1);
});

//creates a server that listens on port 7500 and responds with an inspirational message about your coding skills.
var PORT2 = 7500;

function requestHandler2(req, res)
{
  res.end("Your coding skills are fantastic!");
}

var server2 = http.createServer(requestHandler2);

server2.listen(PORT2, function() {
  console.log("Server listening on " + PORT2);
});
