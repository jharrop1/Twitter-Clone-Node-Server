const mongoose = require('mongoose');
const schema = require('../../db/tweets/tweet-schema');
const model = mongoose.model('TweetModel', schema);
module.exports = model;
