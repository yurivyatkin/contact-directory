// const contacts = require('./contactsModels');
const getModel = require('./contactsModels').getModel;

const getContacts = (req, res, next) => {
  getModel({ collection: 'contacts' }, (err, Contacts) => {
    Contacts.find({}).toArray((err, contacts) => {
      res.status(200).json(contacts);
    });
  });
};

const getContactById = (req, res, next) => {
  getModel({ collection: 'contacts' }, (err, Contacts) => {
    // The id field in our current data is a number
    const id = parseInt(req.params.id, 10);
    Contacts.findOne({ id: id }, (err, result) => {
      if (result) {
        console.log('result', result);
        res.status(200).json(result);
      } else {
        // Temporarily ignore this:
        res.status(200).json({});
      }
    });
  });
};

module.exports = {
  getContacts,
  getContactById,
};
