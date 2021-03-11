const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  }, () => { console.log("you ded cuz you idled");
  });
  conn.setEncoding('utf8'); 
  conn.on('connect',() => {
    console.log("Sucessfully connected to game server");
    conn.write("Name: CCK");
  });
    // conn.write("Move: up");
  return conn;
};

module.exports = { connect 
}; 
