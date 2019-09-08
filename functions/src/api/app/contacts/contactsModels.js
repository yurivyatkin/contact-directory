// This exports an object which will provide access to
// the database operation with 'contacts' collection

// Connect to the database
const connectToDb = require('../utils/db').connectToDb;
const mongoURL = 'mongodb://localhost:27017';

// Temporary mock data:
// const contacts = require('./data').users;

const getModel = (options, callback) => {
  const collectionName = options.collection;
  if (!collectionName) {
    throw new Error('A collection name is required!');
  }
  connectToDb({ mongoURL }, (err, db) => {
    const Model = db.collection(collectionName);
    callback(null, Model);
  });
};

module.exports = {
  getModel,
};
