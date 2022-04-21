const fs=require('fs');

/* This below line will throw a error "Callback must be a function. Received undefined"
fs.writeFile('read.txt'," Today is awesome day");
*/

// To remove the above error we must add the callback function
// fs.writeFile('read.txt'," Today is awesome day",(err)=>{
//     console.log("File is created");
    
// });

// Adding or appending data to read.txt
// fs.appendFile('read.txt',' and I am also awesome😎',(err)=>{
//     console.log("Task Completed")
// })

// Reading the file
fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data)   /*The contents of read.txt has transferred into "data" which is the parameter of th callback function */
});