'user strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose.connect(process.env.MONGO_URI_I9_APOSTILAS, { useNewUrlParser: true })
    .then(() => { })
    .catch((erro) => {
        console.log(erro)
    });

const userModel = require('../src/models/user-model');
const videoLessonModel = require('../src/models/videoLesson-model');
const clasModel = require('../src/models/clas-model');
const ebookModel = require('../src/models/ebook-model');


const authRouter = require('../src/routes/auth-route');
const adminRouter = require('../src/routes/admin-route');
const studentRouter = require('../src/routes/student-route');

app.use(bodyParser.json({
    limit: "5mb"
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization , i9-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    app.use(cors());
    next();
});


app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);

module.exports = app;