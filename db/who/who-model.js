const mongoose = require('mongoose');
const schema = require('../../db/who/who-schema');
const model = mongoose.model('WhoModel', schema);
module.exports = model;
