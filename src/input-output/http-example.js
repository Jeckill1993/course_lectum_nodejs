const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', (response) => {
  if (response.error) throw response.error;

  response.on('data', (chunk) => {
    // console.log(chunk);
  });
});
