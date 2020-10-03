const coursesRouter = require('./courses.router');
const siteRouter = require('./site.router');
const meRouter = require('./me.router');

function connect(app) {
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = connect;
