const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });
  // , () => { console.log("you ded cuz you idled");
  conn.setEncoding('utf8'); 
  conn.on('connect',() => {
    console.log("Sucessfully connected to game server");
  });
  conn.on('data', data => {
    console.log("Server says: Hellooooooo ", data);
  });
  conn.on('connect', () => {
    conn.write("Name: CCK");
  });
    // conn.write("Move: up");
  return conn;
};

module.exports = { connect }; 
