const express = require('express');
const app = express();
const path = require('path');
const arrestedDevelopment = require('./arrestedDevelopment.js');
// const cleanAD = JSON.parse(arrestedDevelopment.readFileSync('arrestedDevelopment', 'utf8'));


const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger)
app.use(express.static('public'))

app.get('/sunsets', (request, response) => {
  response.sendFile(path.join(__dirname+'/public/sunset.html'))
})

app.get('/json', (request, response) => {
  response.status(200).json(arrestedDevelopment);
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
})

// const middlewareFuncName = (request, response, next) => {
//   next();
// };

