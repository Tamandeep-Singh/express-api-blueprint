const http = require('http');
const app = require('./src/app');
const config = require('./config/app.config');
const PORT = config.SERVER_PORT || 8090;

const setupServer = () => {
    app.listen(PORT, () => console.log("[DummyAPI]: Started Server!"));
    http.createServer(app);
};

setupServer();