'use strict'

const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');
const adminController = require('../controllers/admin-controller');

router.post('/videoLesson', authService.isAdmin, adminController.addVideoLesson);
router.get('/videoLesson', authService.isAdmin, adminController.getVideosLesson);
router.get('/videoLesson/totalVideosLesson', authService.isAdmin, adminController.getTotalVideosLesson);
router.put('/videoLesson', authService.isAdmin, adminController.updateVideoLesson);

router.post('/ebook', authService.isAdmin, adminController.addEbook);
router.get('/ebook/totalEbooks', authService.isAdmin, adminController.getTotalEbooks);
router.get('/ebook', authService.isAdmin, adminController.getEbooks);
router.put('/ebook', authService.isAdmin, adminController.updateEbook);

router.post('/user', authService.isAdmin, adminController.addUser);
router.get('/user', authService.isAdmin, adminController.getUsers);
router.get('/user/totalUsers', authService.isAdmin, adminController.getTotalUsers);
router.put('/user', authService.isAdmin, adminController.updateUser);
router.delete('/user/:_id', authService.isAdmin, adminController.deleteUser)

router.post('/clas', authService.isAdmin, adminController.addClas);
router.get('/clas', authService.isAdmin, adminController.getClasses);
router.get('/clas/totalClasses', authService.isAdmin, adminController.getTotalClasses);
router.put('/clas', authService.isAdmin, adminController.updateClas);

module.exports = router;