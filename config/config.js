var config = {
  // The master of this slave
  myMaster : {
    host : 'nerd.disco.master',
    port : 1337
  },

  // Configuration for socket.io client / server
  socketio : {
    client : undefined,
    server : undefined
  }
};

// socket.io - Client configuration
config.socketio.client = {
  uri: 'http://' + config.myMaster.host + ':' + config.myMaster.port
};

module.exports = config;