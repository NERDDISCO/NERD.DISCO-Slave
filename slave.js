var io = require('socket.io-client'),
    config = require('./config/config'),
    socket = io.connect(config.socketio.client.uri)
;

socket.on('connect', function() {
  console.log('connection');
});

socket.on('disconnect', function() {
  console.log('disconnect');
});

socket.on('error', function(err) {
  console.log(err);
});

socket.on('reconnect', function(count) {
  console.log('reconnected', count);
});

socket.on('reconnecting', function(count) {
 console.log('reconnecting', count);
});

socket.on('reconnect_error', function(err) {
  console.log(err);
});