/* Express App */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const data = require('./data');

/* My express App */
module.exports = function expressApp(functionName) {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path
  const routerBasePath = `/.netlify/functions/${functionName}/`;

  /* define routes */
  router.get('/', (req, res) => {
    res.json(data.users);
  });

  // Attach logger
  app.use(morgan(customLogger));

  // Setup routes
  app.use(routerBasePath, router);

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
