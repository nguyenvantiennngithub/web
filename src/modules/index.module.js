const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema(
    {
        name: { type: String },
        description: { type: String },
        videoId: { type: String },
        level: { type: String },
    },
    {
        TimeRanges: true,
    },
);

module.exports = mongoose.model('courses', courses);
