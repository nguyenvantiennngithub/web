const coursesModule = require('../../modules/index.module');
const mongooseToObject = require('../../util/index.mongoose');
class coursesController {
    // [GET] /courses
    index(req, res, next) {
        coursesModule
            .find({})
            .then((courses) => {
                res.render('courses/index', {
                    courses: mongooseToObject.mongoosesToObject(courses),
                });
            })
            .catch((err) => {
                next(err);
            });
    }
    // [GET] /courses/:slug
    show(req, res, next) {
        coursesModule
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject.mongooseToObject(course),
                });
            })
            .catch((err) => {
                next(err);
            });
    }
    // [GET] courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [POST] courses/save
    save(req, res, next) {
        // res.json(req.body)
        const course = new coursesModule(req.body);
        course
            .save()
            .then((course) => {
                res.redirect('/courses');
            })
            .catch((err) => {
                next(err);
            });
    }
    // [GET] courses/:id/edit
    edit(req, res, next) {
        coursesModule
            .findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject.mongooseToObject(course),
                });
            })
            .catch((err) => {
                next(err);
            });
    }
    // [PUT] courses/:id
    update(req, res, next) {
        // console.log(req.body)
        coursesModule
            .updateOne({ _id: req.params.id }, req.body)
            .then((course) => {
                res.redirect(`/me/show-courses`);
            })
            .catch((err) => {
                next(err);
            });
    }
    delete(req, res, next) {
        // console.log(req.body)
        coursesModule
            .deleteOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect(`back`);
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new coursesController();
