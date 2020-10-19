const express = require("express");
const socketio = require("socket.io");
const app = express();
app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res) {
    res.redirect('/chat.html')
})
const server = app.listen(8000);
const io = socketio(server)
io.on('connect', (socket) => {
    socket.on("messageToServer", (msg) => {
        // console.log(msg)
    })
    socket.on('chatMsg', (chat) => {
        io.emit('chatMsgTo', chat)
    })
    socket.emit('messageFromServer', "Hi Client This is a Message From Server")
})