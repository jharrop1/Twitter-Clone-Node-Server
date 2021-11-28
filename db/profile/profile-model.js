const mongoose = require('mongoose');
const schema = require('../../db/profile/profile-schema');
const model = mongoose.model('ProfileModel', schema);
module.exports = model;
