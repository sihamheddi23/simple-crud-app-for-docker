const userModel = require("../models/user.model");

class userService {

    async createUser(user) {
        const createdUser = await userModel.create(user);
        return createdUser;
    }

    async getAllUsers() {
        const users = await userModel.find();
        return users;
    }
}

module.exports = userService;