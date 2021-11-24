const dao = require('../../db/tweets/tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    app.get('/api/a9tweets', findAllTweets);

    const postNewTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "liked": false,
            "time": "2h",
            "avatar-image": "../../images/react.png",
            "logo-image": "../../images/react.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        console.log(newTweet)
        dao.postNewTweet(newTweet)
            .then(newTweet => res.json(newTweet));
    }

    app.post('/api/a9tweets', postNewTweet);

    const updateTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(tweet => res.json(tweet))

    app.put("/api/a9tweets/:id", updateTweet)

    const findTweetById = (req, res) =>
        dao.findTweetById(req.params.id)
            .then(tweet => res.json(tweet));

    app.get('/api/a9tweets/:id', findTweetById);

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then(status => res.send(status));

    app.delete('/api/a9tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        console.log(req.body)
        let likedStatus = req.body.liked;
        let likedNum = req.body.stats.likes
        if (likedStatus === true) {
            likedStatus = false;
            likedNum--;
        } else {
            likedStatus = true;
            likedNum++;
        }
        dao.updateTweet(req.params.id, {liked: likedStatus, stats: {likes: likedNum}})
            .then(status => res.send(status));
    }
    app.put('/api/a9tweets/:id/like', likeTweet);


};
