const fs = require("fs");

// Creating a new file

// fs.writeFileSync('read.txt',"hello folks");

/*When we again use this command it erases the previous data present in the file and insert the new data*/

// fs.writeFileSync(
//   "read.txt",
//   "hello folks cheking the working of same fs.writeFileSync"
// );


// Modifying the read.txt with new contents without deleting the existing contents
// fs.appendFileSync('read.txt'," Here we are apending this line to existing file")


// For reading the file we use readFileSync() 

const buf_data=fs.readFileSync("read.txt");
org_data=buf_data.toString();
console.log(org_data);


// fs.readFile() display the data in binary output so to change binary data to human understandabke we use "toString()" method on it

// To rename the file :- fs.renameFileSync("Old file Name", "New File Name")


