// To create our own server we need to write below code
const http= require('http');


/* In below code "createServer()" is used to create the server. 
    createServer() function has two parameters "req" and "res" 
    "req" is used for request and "res" is used for response
     .end is used to print the msg on server */
const server=http.createServer((req,res)=>{
    res.end("Hello kundan ji")
})

/*With ".listen" we define on which port we want our code to be executed */
server.listen(8000,"127.0.0.1", ()=>{
    console.log("Listening to the port no 8000")
})