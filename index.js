const fs = require("fs");

// Creating a new file

// fs.writeFileSync('read.txt',"hello folks");

/*When we again use this command it erases the previous data present in the file and insert the new data*/
fs.writeFileSync(
  "read.txt",
  "hello folks cheking the working of same fs.writeFileSync"
);
