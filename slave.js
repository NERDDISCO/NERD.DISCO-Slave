var io = require('socket.io-client'),
    config = require('./config/config'),
    socket = io.connect(config.socketio.server.uri),
    fadecandyClient = require('./app/fadecandy-client')
;

var ndSlave = {
  name : 'slave'
};




// Connected to master
socket.on('connect', function() {
  console.log('Connection to', config.socketio.server.uri, 'established.');

  // // Send current status to the master
  // socket.emit('/status', ndSlave);

  // // Received a message to control LEDs
  // socket.on('/led', function(msg) {
  //   console.log(msg);
  // });
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