const fs=require('fs');
const bioData={
    name:"Kundan",
    age:21,
    College:"GITM",
};


// Converting the object "bioData" into JSON
// const jsonData=JSON.stringify(bioData);
// console.log(jsonData)

// //Converting the JSON "bioData" into Object
// const objData=JSON.parse(jsonData);
// console.log(objData)


// copying the object into another file by converting it into JSON format
const jsonData=JSON.stringify(bioData);
fs.writeFile('JSON1.json',jsonData,(err)=>{
    console.log("done")
})


// Reading the file
fs.readFile('JSON1.json',"utf-8",(err,data)=>{
    // Converting back into object from JSON format
    const orgData=JSON.parse(data);
    console.log(jsonData)
    console.log(orgData)
})