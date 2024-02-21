const liveServer = require('live-server');

module.exports = function startServer() {
    const params = {
        port: 8080, // You can change the port if needed
        host: 'localhost',
        root: './build', // Serve files from the build folder
        open: true, // Automatically open the browser
        logLevel: 0 // Set to 0 for minimal logging
    };
    liveServer.start(params);
}