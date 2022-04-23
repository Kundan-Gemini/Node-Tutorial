const http= require('http');


// const server=http.createServer((req,res)=>{
//     // Dealing with URL
//     console.log(req.url)
//     // After this go to chrome and refresh the page then you will see the result in terminal
//     res.end("Hello kundan ji")
// })

// server.listen(8000,"127.0.0.1", ()=>{
//     console.log("Listening to the port no 8000")
// })


// Dealing with routing :=> For this we have to play with if-else
const server=http.createServer((req,res)=>{
    
    if(req.url=='/'){
    res.end("This is home page")
    }
    else if(req.url=='/about'){
        res.end("This is a about page")
    }
    else if(req.url=='/contact_us'){
        res.end("This is contact us page")
    }else{
       
        // res.end("404 \n Page not found")

         // to deal with status code
        //  res.writeHead(404);
        //  res.end("404 \n Page not found")


         // to deal with status code and changing the type of file
         res.writeHead(404,{'content-type':'text/html'});
         res.end("<h1>404 \n Page not found<h1>")

    }
})

server.listen(8000,"127.0.0.1", ()=>{
    console.log("Listening to the port no 8000")
})