const http = require('http');
const app = require('./src/app');
const { connectToDB } = require('./src/config/mongo_db');
const { SERVER_PORT } = require('./src/config/app.config');

const setupServer = async () => {
    await connectToDB();
    app.listen(SERVER_PORT, () => console.log("[DummyAPI]: Started Server!"));
    http.createServer(app);
};

setupServer();