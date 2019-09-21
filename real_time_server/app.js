const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server); 
var oxy_data = [ 89,90,91,92,90,91,92]; 

function random(low,high){
	return Math.random()*(high-low)+low;
}


const getApiAndEmit = async socket => {
  try {
    oxy_data.push(random(80,100));
    oxy_data.shift();
    socket.emit("Oximeter", oxy_data); // Emitting a new message. It will be consumed by the client
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    1000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

authorizedUsers = [
	{'username':'D1234','password':'password','access':'doctor'},
	{'username':'P1234','password':'password','access':'patient'}
]

//app.post('/login')


server.listen(port, () => console.log(`Listening on port ${port}`));

