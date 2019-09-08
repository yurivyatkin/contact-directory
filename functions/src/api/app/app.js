/* Express App */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const contacts = require('./contacts');

/* My express App */
module.exports = function expressApp(appPrefix) {
  const app = express();

  const router = express.Router();

  // Attach routes
  router.use('/contacts', contacts);

  // Attach logger
  app.use(morgan(customLogger));

  // Setup routes
  app.use(appPrefix, router);

  // Apply express middlewares
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  return app;
};

function customLogger(tokens, req, res) {
  const log = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
  ].join(' ');

  if (process.env.NODE_ENV !== 'dev') {
    // Log only in AWS context to get back function logs
    console.log(log);
  }
  return log;
}
