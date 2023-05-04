const fs = require('fs');
const process = require('process');
const { stdin, stdout, exit } = process;
const path = require('path');
let writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Пожалуйста, введите текст:');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    console.log('Вы ввели команду выхода.');
    process.exit();
  }
  console.log('Пожалуйста, введите текст');
  writeableStream.write(data);

});

process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Вы использовали команду выхода.');
  process.exit();
});

