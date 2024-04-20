// node server soket io connecton

const { socket } = require('socket.io');

const io = require('socket.io')(8000);

const users={};

io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        // console.log("New user",name);
        users['socked.id']=name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });
});