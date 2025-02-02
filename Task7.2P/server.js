const express = require("express");
const { Server } = require('socket.io')
const http = require('http')

const catsController = require('./controllers/cats.controller')
const projectsController = require('./controllers/projects.controller')

const app = express();
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/api/projects', projectsController.getProjects)
app.get("/api/cats", catsController.getCats);
app.post("/api/cats", catsController.addCat);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

const port = process.env.PORT || 3000
server.listen(port, () => {
  require('./db')
  console.log("App running on port " + port);

})