let connection;
const setupInput = function(conn){
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};
 
let handleUserInput = function(input) {
    if (input === 'W') {
    connection.write("Move: up");

  } if (input === 'A') {
    connection.write("Move: left");

  } if (input === 'S') {
    connection.write("Move: down");

  } if (input === 'D') {
    connection.write("Move right");
  }
  handleUserInput();
  return stdin;
};

module.exports = { 
  setupInput 
};