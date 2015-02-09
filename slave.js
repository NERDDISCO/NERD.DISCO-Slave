var io = require('socket.io-client'),
    config = require('./config/config'),
    socket = io.connect(config.socketio.client.uri)
;

var status = {
  name : 'raspberry one'
};

// Connected to master
socket.on('connect', function() {
  console.log('connection established.');

  // Send current status to the master
  socket.emit('/status', status);
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