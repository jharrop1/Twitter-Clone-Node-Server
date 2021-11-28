const model = require('./profile-model');

const findAllProfiles = () => model.find();

const findProfileById = (id) =>
    model.findById(id);


const updateProfile = (id, updatedProfile) =>
    model.updateOne({_id: id},
        {$set: updatedProfile});

module.exports = {
    findAllProfiles, updateProfile, findProfileById
};
