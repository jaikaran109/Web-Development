// https://nodejs.org/docs/latest/api/fs.html


// ye code error dega kyuki __dirname is not exist in ESmodule if u wanna run this code change the type in .json


const fs = require('fs');  // require - import
// fs ka matlab hai File System.
// Ye Node.js ka built-in module hai (install karne ki zarurat nahi) jo tumhe files ke saath kaam karne deta hai — jaise file padhna, likhna, delete karna, folder banana, etc.

const path = require('path');
// path module tumhe file/folder paths ko sahi tarike se banane aur handle karne me madad karta hai.


// fs.readFile(path.join(__dirname, 'file.txt'),'utf-8',(err,data) =>{  // it reads the content of file
//     console.log(err,data);
// })



console.log("------------------------------------------------------------------------------------------------");



// fs.readFile(path.join(__dirname, 'fileNhiH.txt'),'utf-8',(err,data) =>{  // ye file exist nhi krta h to console me direct likh dega not exist
//     console.log(err,data);
// })



console.log("------------------------------------------------------------------------------------------------");





fs.readFile(path.join(__dirname,'file.txt'),'utf-8',(err,data) =>{
    console.log(err,data);   // ye async behave kr rha h isiliye last me print hua 
})

console.log("finish reading");

// yha dhyaan do jb file read ho rhi h to - - -  vha phle read ho rhi h usme time ja rha h phir call back function me err , data check ho rha h usme time ja rha h isiliye ye async ka nature show kr rhi h



console.log("------------------------------------------------------------------------------------------------");


fs.writeFile(path.join(__dirname, 'file.txt'),'Lo bhai kr diya update ab khush ??',() =>{
    console.log("Updated");
})

console.log("finish reading");
