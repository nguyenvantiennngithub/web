const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('courses', courses);
