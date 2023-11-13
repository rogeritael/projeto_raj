const { uuid } = require('uuidv4')

const UserModel = require('../models/UserModel');

module.exports = [
    new UserModel(uuid(), "admin", "1234"),
]