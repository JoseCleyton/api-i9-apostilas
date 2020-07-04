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

const userModel = require('./models/user-model');
const videoLessonModel = require('./models/videoLesson-model');
const clasModel = require('./models/clas-model');
const ebookModel = require('./models/ebook-model');


const authRouter = require('./routes/auth-route');
const adminRouter = require('./routes/admin-route');
const studentRouter = require('./routes/student-route');

app.use(bodyParser.json({
    limit: "5mb"
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization , i9-token');
    res.header('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']);
    app.use(cors());
    next();
});

app.use('/', (req, res, next)=>{
    res.status(200).send({
        message: 'API-I9-APOSTILAS v1'
    });
})
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);

module.exports = app;