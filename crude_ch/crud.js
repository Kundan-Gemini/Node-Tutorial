const fs=require("fs");
const { cursorTo } = require("readline");

// Creating a folder using node
// fs.mkdirSync("CRUD_FOLDER");


// Make sure the above command is commented otherwise it will give error that file already exist
// fs.writeFileSync('bio.txt',"My name is kundan");


// Modifying the content of bio.txt without deleting existing content
// fs.appendFileSync("bio.txt","I am Appending this line in file bio.txt")

// Reading the file bio.txt
// const reading_f=fs.readFileSync('bio.txt',"utf-8");
// console.log(reading_f)


// Renaming the file
// fs.renameSync("bio.txt",'newBio.txt')

//We can delete the file in node using fs.unlinkSync('File name')
//Deleting the folder in node using fs.rmdirSync('filename')

