const bcrypt = require('bcryptjs');
const UserService = require('../services/user.service.js');
const userService = new UserService();

class UserController {

    async createUser(req, res) {
        const user = req.body;
        const cryptedPassword =  await bcrypt.hash(user.password, 10);
        user.password = cryptedPassword;
        const createdUser = await userService.createUser(user);
        res.status(201).json(createdUser);
    }

    async getAllUsers(req, res) {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }
}

module.exports = new UserController( );