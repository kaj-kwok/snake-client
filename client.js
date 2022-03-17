const net = require("net");
const { IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: PORT, // IP address here,
    port: IP // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: PCP");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect