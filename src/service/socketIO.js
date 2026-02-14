const { Server } = require('socket.io');

const connectsocketio = () => {
    try {
        const io = new Server({
            cors: {
                origin: "http://localhost:5173"
            }
        });

        io.on('connection', (socket) => {
            socket.emit('welcome', "welcome to chat")
            console.log('a user connected', socket.id);
            // socket.on('sendmsg', (data) => {
            //     console.log("recivedata:",data);
            //     socket.to(data.id).emit('recivemessage',data.message)
            // })
            socket.on('send_msg',(data) => {
                //console.log(id,message);
                io.to(data.to).emit('recive_msg',data.message)
            })

            socket.on('groupname',(group) => {
                socket.join(group)
                //console.log(group)
            })
        });

        io.listen(4000);


    } catch (error) {
        console.log(error)
    }
}

module.exports = connectsocketio;