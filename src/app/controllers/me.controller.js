const coursesModule = require('../../modules/index.module');
class meController {
    // [GET] /me/show-courses
    show(req, res, next) {
        coursesModule
            .find({})
            .then((courses) => {
                res.render('me/showCourses', {
                    courses: courses.map((course) => {
                        return course.toObject();
                    }),
                    helpers: {
                        sum: function (a, b) {
                            return a + b;
                        },
                    },
                });
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new meController();
