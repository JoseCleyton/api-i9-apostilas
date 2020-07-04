'use strict'

const express = require('express');
const router = express.Router();
const authController = require('../controllers/user-controller');
const authService = require('../services/auth-service');

router.post('/authenticate', authController.authenticate);
module.exports = router;