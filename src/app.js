const express = require('express');
const routes = require('./auth/auth.route');
const baseRoutes = require('./app.route');
const privateRoutes = require('./private.route');
const appConfig = require('./app.config');
const authMiddleware = require('./auth/auth.middleware');

module.exports = class Application {
    constructor() {
        this.app = express();
        appConfig(this.app);
    }

    route() {
        this.app.use(baseRoutes);
        this.app.use('/auth/', routes);
        /* private routes */
        this.app.use('/api/v1/', authMiddleware.validateToken , privateRoutes);
        return this;
    }

    start() {
        return this.app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
};