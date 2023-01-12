const { buildResponse } = require('../utils/response');
const User = require('../models/user_model');

async function getUsers() {
    const users = await User.find();
    return users;
};

exports.getAllUsers = async function(request, response) {
    const users = await getUsers();
    const responseMessage = buildResponse(users);
    return response.status(200).json(responseMessage);
};

exports.addUser = async function(request, response) {
    const user = {
        username: request.body.username,
        password: request.body.password,
        email: request.body.email
    };
    const result = await User.create(user);
    return response.status(200).json({message: result})
}