var io = require('socket.io-client'),
    config = require('./config/config'),
    // Connect to URI into using the given namespace
    socket = io.connect(config.socketio.server.uri + '/NERDDISCO-Slave'),
    fadecandyClient = require('./app/fadecandy-client')
;

// var pixels = null;
// var color = { red : 0, green : 0, blue : 0 };

// // Connect to the Fadecandy Server
// var client = new fadecandyClient('localhost', 7890);




// // Connected to master
// socket.on('connect', function() {

//   // Creating the socket connection the the NERD DISCO Studio was successful
//   console.log('NERD DISCO | Slave - Connection to', config.socketio.server.uri, 'established.');


//   // Get data from the NERDDISCO-Studio
//   socket.on('NERDDISCO.output', function(data) {

//     // Save the data
//     pixels = data;

//     // Send the colors from the client to the Fadecandy Server
//     draw();

//   }); // / socket.on('NERDDISCO.output')


// }); // / socket.on('connect')
