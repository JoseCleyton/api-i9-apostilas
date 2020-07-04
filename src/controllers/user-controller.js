'use strict'

const userRepository = require('../repository/user-repository');
const authService = require('../services/auth-service');
const md5 = require('md5');

exports.authenticate = async (req, res, next) => {
    const { login, password } = req.body.user;
    
    const user = await userRepository.authenticate({
        login: login,
        password: md5(password)
    })
    if (user === null) {
        res.status(400).send({
            message: 'Inválid Credentials'
        })
    } else {

        let token = await authService.generateToken({
            name: user.name,
            login: user.login,
            roles: user.roles,
            clas: user.clas,
        });

        res.status(200).send({
            token: token,
            roles: user.roles
        })
    }

}
