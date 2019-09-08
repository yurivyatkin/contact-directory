const contacts = require('./contactsModels');

const getContacts = (req, res) => {
  const results = contacts;
  res.status(200).json(results);
};

const getContactById = (req, res) => {
  const id = req.params.id;
  const result = contacts.find((contact) => {
    // Temporarily use whatever data we have:
    // eslint-disable-next-line eqeqeq
    return contact.id == id;
  });
  if (result) {
    res.status(200).json(result);
  } else {
    // Temporarily ignore this:
    res.status(200).json({});
  }
};

module.exports = {
  getContacts,
  getContactById,
};
