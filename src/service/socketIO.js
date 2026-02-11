const { Server } = require('socket.io');

const connectsocketio = () => {
    try {
        const io = new Server({
            cors: {
                origin: "http://localhost:5173"
            }
        });

        io.on('connection', (socket) => {
            socket.emit('welcome',"welcome to chat")
            console.log('a user connected',socket.id);
        });

        io.listen(4000);


    } catch (error) {
        console.log(error)
    }
}

module.exports = connectsocketio;