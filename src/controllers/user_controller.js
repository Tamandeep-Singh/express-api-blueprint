exports.getDefaultUserHandler = async function(request, response) {
    return response.status(200).json({
       message: '[DummyAPI::UserController]: Default handler',
       timestamp: Date.now()
    });
}