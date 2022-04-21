const os=require('os');


console.log(os.arch());
console.log(os.hostname());

const freem=os.freemem();
console.log(`${freem /1024/1024/1024}`);

const freetm=os.totalmem();
console.log(`${freetm /1024/1024/1024}`);

// Any many more.............