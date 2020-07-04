'use strict';
const studentRepository = require('../repository/student-repository');
const authService = require('../services/auth-service');

exports.getTotalVideosLesson = async (req, res, next) => {
    let token = req.headers['i9-token'];
    let clas;
    await authService.decodeToken(token).then(
        (data) => {
            clas = data.clas;
        }
    );
    const totalVideosLesson = await studentRepository.getTotalVideosLesson(clas);
    res.status(200).send({
        totalVideosLesson: totalVideosLesson
    })

};
exports.getVideosLesson = async (req, res, next) => {
    let token = req.headers['i9-token'];
    let clas;
    await authService.decodeToken(token).then(
        (data) => {
            clas = data.clas;
        }
    );
    const videosLesson = await studentRepository.getVideosLesson(clas);
    res.status(200).send({
       videosLesson: videosLesson
    })

};
exports.getTotalEbooks = async (req, res, next) => {
    const token = req.headers['i9-token'];
    let clas;
    await authService.decodeToken(token).then(
        (data) => {
            clas = data.clas;
        }
    );
    const totalEbooks = await studentRepository.getTotalEbooks(clas);
    res.status(200).send({
        totalEbooks: totalEbooks
    })
};
exports.getEbooks = async (req, res, next) => {
    const token = req.headers['i9-token'];
    let clas;
    await authService.decodeToken(token).then(
        (data) => {
            clas = data.clas;
        }
    );
    const ebooks = await studentRepository.getEbooks(clas);
    res.status(200).send({
        ebooks: ebooks
    })
};