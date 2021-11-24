let profiles = require('../../data/profile.json')

module.exports = (app) => {

    const findProfile = (req, res) => {
        res.json(profiles);
    }

    app.get('/api/profiles', findProfile);

    const updateProfile = (req, res) => {
        const newProfile = req.body;
        const newProfileID = newProfile.profile.profileID;
        profiles.map(profile => {
            if(profile.profileID === newProfileID) {
                if(profile.bio !== newProfile.profile.bio && newProfile.profile.bio !== '') {
                    profile.bio = newProfile.profile.bio;
                }
                if(profile.name !== newProfile.profile.name && newProfile.profile.name !== '') {
                    profile.name = newProfile.profile.name;
                }
                if(profile.location !== newProfile.profile.location && newProfile.profile.location !== '') {
                    profile.location = newProfile.profile.location;

                }
                if(profile.website !== newProfile.profile.website && newProfile.profile.website !== '') {
                    profile.website = newProfile.profile.website;
                }
            }
        });
        res.json(newProfile);
    }
    app.put('/api/profiles/:profileID', updateProfile);

};
