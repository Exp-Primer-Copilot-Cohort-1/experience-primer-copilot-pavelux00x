// Create web server


// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var ejs = require('ejs');
var qs = require('querystring');

// Load the express module to create an express server.
var express = require('express');
var app = express();

// Configure our HTTP server to respond with Hello World to all requests.
app.get('/', function (request, response) {
  response.send('Hello World');
});

app.get('/test', function (request, response) {
  response.send('test');
});

app.get('/comments', function (request, response) {
  console.log('GET request for /comments');
  response.send('comments');
});

app.post('/comments', function (request, response) {
  console.log('POST request for /comments');
  response.send('comments');
});

app.get('/comments/:id', function (request, response) {
  var id = request.params.id;
  console.log('GET request for /comments/' + id);
  response.send('comments/' + id);
});

app.put('/comments/:id', function (request, response) {
  var id = request.params.id;
  console.log('PUT request for /comments/' + id);
  response.send('comments/' + id);
});

app.delete('/comments/:id', function (request, response) {
  var id = request.params.id;
  console.log('DELETE request for /comments/' + id);
  response.send('comments/' + id);
});

app.listen(3000);

// Put a friendly message on the terminal
console.log('Server running ');