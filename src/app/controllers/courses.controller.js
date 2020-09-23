class coursesController {
    // [GET] /courses
    index(req, res) {
        res.render('courses/home');
    }
}

module.exports = new coursesController();
