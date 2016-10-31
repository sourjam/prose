require('babel-core/register')({
    presets: ['es2015', 'react', 'stage-0']
});

const http = require('http');
const express = require('express');
const path = require('path');

const isoMiddleware = require('./isoMWare');

const app = express();

// use ejs template engine on express
app
  .set('views', path.join(__dirname, '/views'))
  .use('/', express.static(path.join(__dirname, '/views')));

// loading the hot-middleware

app
  .use((req, res, next) => {
    isoMiddleware(req, res)
    next();
  });

app
    .listen(3001,
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('listening on 3001')
      }
    });