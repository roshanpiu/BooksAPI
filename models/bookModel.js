var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {type: String},
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default: false}
});

//tells mongoose that we have a new model called 'Book'
//loads the bookModel to mongoose and returns it as a module
module.exports = mongoose.model('Book', bookModel);