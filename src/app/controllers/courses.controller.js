class coursesController {
  // [GET] /courses
  index(req, res) {
    res.send('Courses Page');
  }
}

module.exports = new coursesController();
