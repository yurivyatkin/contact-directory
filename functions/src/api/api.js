// According to Netlify's convention, this module should have the same
// name as the function's folder, in this case 'api'.
// For a full working demo check https://express-via-functions.netlify.com/.netlify/functions/serverless-http
const serverless = require("serverless-http");
const expressApp = require("./app");

// We need to define our function name for express routes
// to set the correct base path
const functionPrefix = "api";

// Set router base path for local dev
const appPrefix =
  process.env.NODE_ENV === 'dev'
    ? `/${functionPrefix}`
    : `/.netlify/functions/${functionPrefix}/`;

// Initialize express app
const app = expressApp(appPrefix);

// Export lambda handler
exports.handler = serverless(app);
