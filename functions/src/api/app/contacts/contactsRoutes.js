// TODO: CRUD routes for 'contacts' resource

const express = require('express');
const router = express.Router();

const { getContacts, getContactById } = require('./contactsControllers');

router.get('/', getContacts);

router.get('/:id', getContactById);

module.exports = router;
