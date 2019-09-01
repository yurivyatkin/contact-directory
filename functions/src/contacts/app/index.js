/* Express App */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const routes = require('./routes');

/* My express App */
module.exports = function expressApp(functionName) {
  const app = express();

  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path for local dev
  const routerBasePath =
    process.env.NODE_ENV === 'dev'
      ? `/${functionName}`
      : `/.netlify/functions/${functionName}/`;

  router.use('/', routes);

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
