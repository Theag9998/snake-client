const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
		port: 50541
		// 50.64.116.162
	});
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
	conn.on('data', (data) => {
		console.log('Server says: ', data);
	});
	conn.on("connect", () => {
		console.log('connected!');
	})

  return conn;
}

console.log('Connecting ...');
connect();
