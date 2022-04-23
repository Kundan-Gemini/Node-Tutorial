// Package.json :=> NPM se jitne bhi packages liye h unn sbb ki list package.json m hoti h

// 1. To work with NPM you must be in root folder(Mytb ki jis folder m tuum krrna chahate ho usse root foldder kehte h) and then simply type commpand "npm init"

/* 2. Go to cmd and type command "npm i chalk@4.1.2" to install chalk package :=> It will update the package.json
   and will include chalk in it and it will also create a file named package-lock.json and folder node_modules*/

// Node modules :=> Node modules contains the code of the dependency 

// Installing chalk module :=> npm i chalk@4.1.2
// Using the chalk module

const chalk=require('chalk');
console.log(chalk.blue.italic.underline.inverse("hello world"));
console.log(chalk.green.underline.inverse("success"));
console.log(chalk.red.underline.inverse("Fail"));

// Installing chalk module :=> npm install validator
// using the validator module to validate email

const validator=require('validator')
const res=validator.isEmail("kunda.181033@gmail.com");
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res))

const req=validator.isEmail("kunda.181033gmail.com");
console.log(req ? chalk.green.inverse(req) : chalk.red.inverse(req))