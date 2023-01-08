const http = require('http');
const app = require('./src/app');
const { connectToDB } = require('./config/mongo_db');
const {PORT, MONGO_URI } = require('./config/app.config');

const setupServer = async () => {
    await connectToDB(MONGO_URI);
    app.listen(PORT, () => console.log("[DummyAPI]: Started Server!"));
    http.createServer(app);
};

setupServer();