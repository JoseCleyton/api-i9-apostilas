'use strict';
const mongoose = require('mongoose');
const VideoLesson = mongoose.model('VideoLesson');
const Ebook = mongoose.model('Ebook');

exports.getTotalVideosLesson = async (clas) => {
    return await VideoLesson.find({ clas: clas }).count();
};
exports.getVideosLesson = async (clas) => {
    return await VideoLesson.find({ clas: clas }).populate('clas', 'name teacher');
};
exports.getTotalEbooks = async (clas) => {
    return await Ebook.find({clas: clas}).count();
};
exports.getEbooks = async (clas) => {
    return await Ebook.find({clas: clas}).populate('clas', 'name teacher');
};