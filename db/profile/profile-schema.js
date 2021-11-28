const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    tweets: {type: Number, defaultValue: 0},
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: {type: Number, defaultValue: 0},
    followersCount: {type: Number, defaultValue: 0}
}, {collection: "profile"});
schema.set('timestamps', true)
module.exports = schema;
