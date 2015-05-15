var config = {
  // The master of this slave
  myMaster : {
    host : 'nerddisco.master',
    port : 1337
  },

  socketio : {
    server : null
  }
};

// socket.io - Client configuration
config.socketio.server = {
  uri: 'http://' + config.myMaster.host + ':' + config.myMaster.port
};

module.exports = config;