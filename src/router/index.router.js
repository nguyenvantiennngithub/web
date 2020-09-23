const coursesRouter = require('./courses.router');
const siteRouter = require('./site.router');

function connect(app) {
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = connect;
