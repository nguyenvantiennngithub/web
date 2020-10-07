const { count } = require('../../modules/index.module');
const coursesModule = require('../../modules/index.module');
const mongooseToObject = require('../../util/index.mongoose');
class meController {
    // [GET] /me/show-courses
    show(req, res, next) {
        Promise.all([
            coursesModule.find({}),
            coursesModule.countDocumentsDeleted(),
        ]).then(([courses, countDeleted]) => {
            res.render('me/showCourses', {
                countDeleted: countDeleted,
                courses: mongooseToObject.mongoosesToObject(courses),
                helpers: {
                    sum: function (a, b) {
                        return a + b;
                    },
                },
            });
        });
    }
    x;
    //     coursesModule.countDocumentsDeleted()
    //         .then(count=>{
    //             console.log(count)
    //         })
    //         .catch(err=>{
    //             next(err)
    //         })
    //     coursesModule.find({})
    //         .then((courses) => {
    //             res.render('me/showCourses', {
    //                 courses: courses.map((course) => {
    //                     return course.toObject();
    //                 }),
    //                 helpers: {
    //                     sum: function (a, b) {
    //                         return a + b;
    //                     },
    //                 },
    //             });
    //         })
    //         .catch((err) => {
    //             next(err);
    //         });
    // }
    //[GET] /me/trash-store
    trash(req, res, next) {
        coursesModule
            .findDeleted({ deleted: true })
            .then((courses) => {
                res.render('me/trashCourses', {
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
