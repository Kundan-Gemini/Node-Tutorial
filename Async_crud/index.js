const fs=require('fs');


// Making a folder
// fs.mkdir('Async_Crud',(err)=>{
//     console.log("Folder has been created")
// });

// Creating a file in "Async_Crud"

// fs.writeFile("bio.txt","Hello This is an Example of CRUd using Async",(err)=>{
//     console.log("File has been created")
// })


//Reading the file
// fs.readFile("bio.txt","utf-8",(err,data)=>{
//     console.log(data)
// })

// Renaming the file
fs.rename('bio.txt','newbio.txt',(err)=>{
    console.log("File has been renamed")
})