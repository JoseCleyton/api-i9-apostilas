'use strict'
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student-controller');
const authService = require('../services/auth-service');

router.get('/video/totalVideosLesson', authService.authorize, studentController.getTotalVideosLesson);
router.get('/videoLesson', authService.authorize, studentController.getVideosLesson);

router.get('/ebook/totalEbooks', authService.authorize, studentController.getTotalEbooks);
router.get('/ebook', authService.authorize, studentController.getEbooks);

module.exports = router;