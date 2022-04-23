// Creating the function

// const add=(a,b)=>{
//     return a+b;
// }


// By the below line we are making the file or function public so that it can be available for every other file
// module.exports=add;

//accessing a variable with string in other file
// const name="kundan"
// module.exports=name;


// For Subtraction
// const sub=(a,b)=>{
//     return a-b;
// }

// module.exports=sub;


// => IMPORTANT !
// For adding and subtracting simultaneously

// const add=(a,b)=>{
//     return a+b;
// }

// const sub=(a,b)=>{
//         return a-b;
//     }

// module.exports.add=add;
// module.exports.sub=sub;

/*we can do the above work i.e using two function or varibales simultaneously using object destructuring */
const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
        return a-b;
    }

// module.exports.add=add;      1
// module.exports.sub=sub;      2

// we can modify above 1 and 2 using object destructuring

// module.exports={add,sub}

// Passing a name
const name='Kundan';
module.exports={add,sub,name}

