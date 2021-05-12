const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
     
    title: {
        type: String, 
        required: true
    },
    author: Array,
    date: {
        type: Date,
        default: Date.now
    },
    description: String,
    image: String,
    link: String


})
const Books = mongoose.model("Book", booksSchema);

module.exports = Books;