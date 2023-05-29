const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    name: String,
    authorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "author"
    },
    genreId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Genre"
    }
});

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;