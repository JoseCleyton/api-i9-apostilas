'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true,
        enum: ['student', 'admin'],
        default: 'student'
    }
    ,
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    clas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clas'
    }
});

module.exports = mongoose.model('User', schema)