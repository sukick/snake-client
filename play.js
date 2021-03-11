const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  }, () => { console.log("you ded cuz you idled");

  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // conn.addListener("idling", function(){
  //   console.log("you ded cuz you idled");
  // // })
  // console.log(conn);
  return conn;
}

console.log('Connecting ...');
connect();

