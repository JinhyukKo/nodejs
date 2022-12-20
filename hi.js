
// const hi = require('./hi2');
// hi();
// const obj = { x
//     a: ()=>console.log('hi'),
//     b: ()=>console.log('hi2') };
// const { a, b } = obj; 
// console.log(a);
// console.log(b);
// a();
const { readFile, readFileSync } = require('fs');
a = readFileSync('./hi/sopa.txt');
console.log(a);
readFile('./hi/sopa2.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        throw new Error('kan inte access the file');
    }
        console.log(result);
}); 
const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('hello');
    res.end();
});
server.listen(5000);