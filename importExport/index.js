// Creating our own modules and using it => In node every individual file is known as module

// Importing "open.js" suing require('')
// const add=require('./oper') /*Here "add" will get all the data exported from the "oper.js" file */

// For addition
// console.log(add(3,5))


// For getting the name
// console.log(add)

// For subtraction
// const sub=require('./oper')
// console.log(sub(5,3))


// For simultaneously calling the two functions
// const oper=require('./oper')
// console.log(oper) 
/*This will show that oper will carry the data of two function in the form of object (- like this : -> { add: [Function: add], sub: [Function: sub] })and when we 
need to access the content of the two function we need to use ".property_name" like we use in object */

/*we can do the above work i.e using two function or varibales simultaneously using object destructuring */
// const {add,sub}=require('./oper')
// console.log(add(5,5));
// console.log(sub(9,3));

// Passing a variable 
const {add,sub,name}=require('./oper')
console.log(add(5,5));
console.log(sub(9,3));
console.log(name);