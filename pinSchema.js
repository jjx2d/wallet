const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    pin: { type: 'String', required: true },
});
module.exports = mongoose.model('Post', postSchema);
