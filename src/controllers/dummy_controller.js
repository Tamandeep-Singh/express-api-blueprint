exports.getDummyHandler = async function(request, response) {
    return response.status(200).json({
       message: 'dummy controller',
       timestamp: Date.now()
    });
}