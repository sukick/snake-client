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
 
const handleUserInput = function(button) {
    if (button === 'W') {
    connection.write("Move: up");
  } 
  if (button === 'A') {
    connection.write("Move: left");
  } 
  if (button === 'S') {
    connection.write("Move: down");
  } 
  if (button === 'D') {
    connection.write("Move right");
  }
  handleUserInput();
};

module.exports = { setupInput };