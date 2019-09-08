// TODO: Requiring this should create a MongoDB connection
// TODO: It should check if the connection exists, and reuse the connection
// TODO: If run locally, it should check if .env overrides the database URL.
const MongoClient = require('mongodb').MongoClient;

const connectToDb = (options, callback) => {
  const mongoURL = options.mongoURL;
  if (!mongoURL) {
    throw new Error('A URL for a MongoDB connection is required!');
  }
  MongoClient.connect(
    mongoURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) {
        throw new Error('Error connecting to MongoDB!');
      }
      console.log('Connected to the database!');
      const db = client.db('contact-directory');
      callback(null, db);
    }
  );
};

module.exports = {
  connectToDb,
};
