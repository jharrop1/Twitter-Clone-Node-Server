const model = require('./tweet-model');

const findAllTweets = () => model.find().sort({createdAt: -1});

const findTweetById = (id) =>
    model.findById(id);

const findTweetByBio = (tweet) =>
    model.findOne({tweet: tweet});

const postNewTweet = (tweet) => model.create(tweet);


const deleteTweet = (id) =>
    model.deleteOne({_id: id});

const updateTweet = (id, updatedTweet) =>
    model.updateOne({_id: id},
    {$set: updatedTweet});

const likedStatus = (id) =>
    model.findOne({_id: id}, {liked: 1})


module.exports = {
    findAllTweets, postNewTweet,
    deleteTweet, updateTweet, findTweetById, likedStatus, findTweetByBio
};
