'use strict'

const mongoose = require('mongoose');
const VideoLesson = mongoose.model('VideoLesson');
const Clas = mongoose.model('Clas');
const User = mongoose.model('User');
const Ebook = mongoose.model('Ebook');

exports.addVideoLesson = async (data) => {
    let videoLesson = new VideoLesson(data);
    return await videoLesson.save();
};
exports.getVideosLesson = async () => {
    return await VideoLesson.find().populate('clas', 'name');
};
exports.getTotalVideosLesson = async () => {
    return await VideoLesson.find().count();
};
exports.updateVideoLesson = async (id, data) => {
    const { title, link, clas, description } = data;

    return await VideoLesson.updateOne({ _id: id }, {
        title, link, clas, description
    });
};

exports.addEbook = async (data) => {
    let ebook = new Ebook(data);
    return await ebook.save();
};
exports.getTotalEbooks = async () => {
    return await Ebook.find().count();
};
exports.getEbooks = async () => {
    return await Ebook.find().populate('clas', 'name');
};
exports.updateEbook = async (id, data) => {
    const { title, link, clas, description } = data;

    return await Ebook.updateOne({ _id: id }, {
        title, link, clas, description
    });
};

exports.addUser = async (data) => {
    let user = new User(data);
    return await user.save();
};
exports.getUsers = async () => {
    return await User.find().populate('clas', 'name');
};
exports.getTotalUsers = async () => {
    return await User.find().count();
};
exports.updateUser = async (id, data) => {
    const { name } = data;

    return await User.updateOne({ _id: id }, {
        name
    });
};

exports.addClas = async (data) => {
    let clas = new Clas(data);
    return await clas.save();
};
exports.getClasses = async () => {
    return await Clas.find();
};
exports.getTotalClasses = async () => {
    return await Clas.find().count();
};
exports.updateClas = async (id, data) => {
    const { name, schedulle, teacher } = data;

    return await Clas.updateOne({ _id: id }, {
        name, schedulle, teacher
    });
};


