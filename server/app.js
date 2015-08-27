'use strict';

var express = require('express');
var socketio = require('socket.io');
var app = express();

app.use(express.static('client'));

var server = app.listen(3000, function() {
  console.log('server listening on port 3000');
});

socketio(server);

///_________Minimal Express Server before adding ANYTHING else___________/////

// 'use strict';

// var express = require('express');
// var app = express();

// app.use(express.static('client'));

// app.listen(3000, function() {
//   console.log('Server listening on port 3000');
// });
