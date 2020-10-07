const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const courses = new Schema(
    {
        name: { type: String },
        description: { type: String },
        img: { type: String },
        videoId: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    },
);

courses.plugin(mongooseDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: 'all',
    validateBeforeDelete: true,
});

module.exports = mongoose.model('courses', courses);
