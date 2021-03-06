'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true
    },
    schedulle: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Clas', schema)