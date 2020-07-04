'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    clas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clas'
    }
});

module.exports = mongoose.model('VideoLesson', schema)