'use strict'

const adminRepository = require('../repository/admin-repository');
const md5 = require('md5');

exports.addVideoLesson = async (req, res, next) => {
    const videoLesson = await adminRepository.addVideoLesson(req.body.videoLesson);
    res.status(200).send({
        videoLesson: videoLesson
    })
};
exports.getVideosLesson = async (req, res, next) => {
    const videosLesson = await adminRepository.getVideosLesson();
    res.status(200).send({
        videosLesson: videosLesson
    })
};
exports.getTotalVideosLesson = async (req, res, next) => {
    const totalVideosLesson = await adminRepository.getTotalVideosLesson();
    res.status(200).send({
        totalVideosLesson: totalVideosLesson
    })
};
exports.updateVideoLesson = async (req, res, next) => {
    const result = await adminRepository.updateVideoLesson(req.body._id, req.body.videoLesson);
    if (result.nModified >= 1) {
        res.status(200).send();
    }
    else {
        res.status(400).send();
    }
};

exports.addEbook = async (req, res, next) => {
    const ebook = await adminRepository.addEbook(req.body.ebook);
    res.status(200).send({
        ebook: ebook
    })
};
exports.getTotalEbooks = async (req, res, next) => {
    const totalEbooks = await adminRepository.getTotalEbooks();
    res.status(200).send({
        totalEbooks: totalEbooks
    })
};
exports.getEbooks = async (req, res, next) => {
    const ebooks = await adminRepository.getEbooks();
    res.status(200).send({
        ebooks: ebooks
    })
};
exports.updateUser = async (req, res, next) => {
    const result = await adminRepository.updateUser(req.body._id, req.body.user);
    if (result.nModified >= 1) {
        res.status(200).send();
    }
    else {
        res.status(400).send();
    }
};

exports.addUser = async (req, res, next) => {
    const { name, login, password, clas, roles } = req.body.user;

    const user = await adminRepository.addUser({
        name: name,
        login: login,
        password: md5(password),
        clas: clas,
        roles: roles
    });
    res.status(200).send({
        user: user
    })
};
exports.getUsers = async (req, res, next) => {
    const users = await adminRepository.getUsers();
    res.status(200).send({
        users: users
    })
};
exports.getTotalUsers = async (req, res, next) => {
    const totalUsers = await adminRepository.getTotalUsers();
    res.status(200).send({
        totalUsers: totalUsers
    })
};
exports.updateEbook = async (req, res, next) => {
    const result = await adminRepository.updateEbook(req.body._id, req.body.ebook);
    if (result.nModified >= 1) {
        res.status(200).send();
    }
    else {
        res.status(400).send();
    }
};

exports.addClas = async (req, res, next) => {

    const clas = await adminRepository.addClas({
        name: req.body.name,
        schedulle: req.body.schedulle,
        teacher: req.body.teacher,
    })
    if (clas === null) {
        res.status(400).send({
            message: 'Erro na Solicitação !'
        })
    } else {
        res.status(200).send({
            clas: clas
        })
    }
}
exports.getClasses = async (req, res, next) => {
    const classes = await adminRepository.getClasses();
    res.status(200).send({
        classes: classes
    })
};
exports.getTotalClasses = async (req, res, next) => {
    const classes = await adminRepository.getTotalClasses();
    res.status(200).send({
        totalClasses: classes
    })
};
exports.updateClas = async (req, res, next) => {
    const result = await adminRepository.updateClas(req.body._id, req.body.clas);
    if (result.nModified >= 1) {
        res.status(200).send();
    }
    else {
        res.status(400).send();
    }
};