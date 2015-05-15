var io = require('socket.io-client'),
    config = require('./config/config'),
    // Connect to URI into using the given namespace
    socket = io.connect(config.socketio.server.uri + '/NERDDISCO-Slave'),
    fadecandyClient = require('./app/fadecandy-client')
;

var pixels = null;
var color = { red : 0, green : 0, blue : 0 };

// Connect to the Fadecandy Server
var client = new fadecandyClient('localhost', 7890);




// Connected to master
socket.on('connect', function() {

  // Creating the socket connection the the NERD DISCO Studio was successful
  console.log('NERD DISCO | Slave - Connection to', config.socketio.server.uri, 'established.');


  // Get data from the NERDDISCO-Studio
  socket.on('NERDDISCO.output', function(data) {

    // Save the data
    pixels = data;

    // Send the colors from the client to the Fadecandy Server
    draw();

  }); // / socket.on('NERDDISCO.output')


}); // / socket.on('connect')





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


















/**
 * Extract the pixel data from the given position
 * 
 * @param  Interger position
 * 
 * @return Object pixel
 */
function getPixel(position) {
  var pixel = {};

  var _position = position * 3;

  // Pixel exists
  if (pixels !== null && pixels[_position - 1] !== undefined) {
    // Blue
    pixel.b = pixels[_position - 1];

    // Green
    pixel.g = pixels[_position - 2];

    // Red
    pixel.r = pixels[_position - 3];
  } else {
    // Black
    pixel.a = pixel.r = pixel.g = pixel.b = 0;
    
  }

  return pixel;
}

function draw() {

    var amount = 64 * 5;

    for (var pixel = 0; pixel < amount; pixel++) {
      color = getPixel(pixel + 1);
      client.setPixel(pixel, color.r, color.g, color.b);
    }

    client.writePixels();
}










function demo() {
    var millis = new Date().getTime();

    var amount = 64 * 1;

    for (var pixel = 0; pixel < amount; pixel++)
    {

        var t = pixel * 0.1 + millis * 0.015;
        var red = (255 * Math.random()) * Math.sin(t + Math.random());
        var green = (255 * Math.random()) * Math.sin(t + Math.random());
        var blue = (255 * Math.random()) * Math.sin(t + Math.random());

        client.setPixel(pixel, red, green, blue);
    }
    client.writePixels();
    // 
    // 
    // 
  // // Set color for every NeoPixel
  // client.setPixel(0, 255, 0, 0); // #1: red
  // client.setPixel(1, 255, 255, 0); // #2: yellow
  // client.setPixel(2, 0, 255, 0); // #3: green

  // // Send colors to the LEDs
  // client.writePixels();
}

// Demo mode
// if (env === 'demo') {
//   setInterval(demo, 1000 / 30);
// }







function black() {
    var amount = 64 * 5;

    for (var pixel = 0; pixel < amount; pixel++) {
        client.setPixel(pixel, 0, 0, 0);
    }

    client.writePixels();
}

// // Demo mode
// if (env === 'off' || env === 'demo2') {
//   setInterval(black, 1000 / 15);
// }