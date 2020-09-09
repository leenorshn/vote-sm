

let io:any;

export ={
    init:(httpServer:any)=>{
       io=require( "socket.io")(httpServer);
       return io;
    },
    getIo:()=>{
        if(!io){
            throw new Error("Socket not initialized")
        }

        return io;
    }
}