const  fs = require('fs');
const path = require('path');
const text = path.resolve(__dirname, 'text.txt');
const readableStream = fs.createReadStream( text, 'utf-8');
let data = '';


readableStream.on('data', chunk => console.log(chunk));
