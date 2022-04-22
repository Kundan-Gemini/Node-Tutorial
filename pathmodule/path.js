const path=require('path')

// Getting the file path
console.log(path.dirname('C:/Users/ku.kumar/Desktop/Kundan/Node/pathmodule/path.js'));

// Getting the extension name of the file
console.log(path.extname('C:/Users/ku.kumar/Desktop/Kundan/Node/pathmodule/path.js'));

// Getting the name of the file
console.log(path.basename('C:/Users/ku.kumar/Desktop/Kundan/Node/pathmodule/path.js'));

// Getting all this above things using one command
const ab=path.parse('C:/Users/ku.kumar/Desktop/Kundan/Node/pathmodule/path.js')
console.log(ab)
console.log(ab.name);
console.log(ab.ext);

