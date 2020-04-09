const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
		port: PORT
		// 50.64.116.162
	});
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
	conn.on('data', (data) => {
		console.log('Server says: ', data);
	});
	conn.on("connect", () => {
		console.log('connected!');
		conn.write('Name: SKY');
		setInterval(() => {
		//conn.write('Move: up');
		}, 50);
		
	})

  return conn;
}
module.exports = {connect };