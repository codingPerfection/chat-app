var express = require('express');
var app = express();
var expressStaticGzip = require("express-static-gzip");
var server = require('http').createServer(app);
var io = require('socket.io')(server);


let buildPath = __dirname + "/../front/build/";
app.use(expressStaticGzip(buildPath));
app.use(express.static(buildPath))

io.on("connection", (socket) => {

    socket.on("newMessage", (data, think) => {
        socket.broadcast.emit("newMessage", data, think);
    })

    socket.on("nickname", (data) => {
        socket.broadcast.emit("nickname", data);
    })

    socket.on("oops", () => {
        socket.broadcast.emit("oops" );
    })


})

server.listen(80);