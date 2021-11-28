const mongoose = require('mongoose');
const schema = mongoose.Schema({
    avatarIcon: String,
    userName: String,
    twitterHandle: String
}, {collection: "who"});
schema.set('timestamps', true)
module.exports = schema;
