let dao = require('../../db/profile/profile-dao')

module.exports = (app) => {

    const findProfile = (req, res) => {
        dao.findAllProfiles()
            .then(profile => res.json(profile));
    }

    app.get('/api/profiles', findProfile);

    const updateProfile = (req, res) => {
        const newProfile = req.body;
        const oldProfile = dao.findProfileById(req.params.id)

                if(oldProfile.bio !== newProfile.bio && newProfile.bio !== '') {
                    oldProfile.bio = newProfile.bio;
                }
                if(oldProfile.name !== newProfile.name && newProfile.name !== '') {
                    oldProfile.name = newProfile.name;
                }
                if(oldProfile.location !== newProfile.location && newProfile.location !== '') {
                    oldProfile.location = newProfile.location;
                }
                if(oldProfile.website !== newProfile.website && newProfile.website !== '') {
                    oldProfile.website = newProfile.website;
                }
        dao.updateProfile(req.params.id, {bio: oldProfile.bio,
                                                    name: oldProfile.name,
                                                    locaiton: oldProfile.location,
                                                    website: oldProfile.website})
            .then(status => res.send(status));
    }
    app.put('/api/profiles/:profileID', updateProfile);

};
