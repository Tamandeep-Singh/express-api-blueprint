const { SERVER_ENVIRONMENT } = require('../config/app.config')

exports.buildResponse = (data) => {
    const response = {
       timestamp: Date.now(),
       environment: SERVER_ENVIRONMENT,
       result: Array.isArray(data) ? data: [data]
    }
    return response;
}
