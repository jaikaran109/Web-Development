// https://nodejs.org/docs/latest/api/fs.html



const fs = require('fs');  // require - import
const path = require('path');

// fs.readFile(path.join(__dirname, 'file.txt'),'utf-8',(err,data) =>{
//     console.log(err,data);
// })



console.log("------------------------------------------------------------------------------------------------");



// fs.readFile(path.join(__dirname, 'fileNhiH.txt'),'utf-8',(err,data) =>{  // ye file exist nhi krta h to console me direct likh dega not exist
//     console.log(err,data);
// })



console.log("------------------------------------------------------------------------------------------------");





fs.readFile(path.join(__dirname, 'file.txt'),'utf-8',(err,data) =>{
    console.log(err,data);
})

console.log("finish reading");

// yha dhyaan do jb file read ho rhi h to - - -  vha phle read ho rhi h usme time ja rha h phir call back function me err , data check ho rha h usme time ja rha h isiliye ye async ka nature show kr rhi h



console.log("------------------------------------------------------------------------------------------------");


fs.writeFile(path.join(__dirname, 'file.txt'),'Lo bhai kr diya update ab khush ??',() =>{
    console.log("Updated");
})

console.log("finish reading");