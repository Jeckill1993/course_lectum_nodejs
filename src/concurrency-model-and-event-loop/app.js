const https = require('http');
const fs = require('fs');

fs.readFile('./app.js', (error, file) => {
  if (error) throw error;
  console.log(file);
});
