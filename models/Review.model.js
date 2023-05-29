const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema ({
    name: String,
    user: String,
    booksId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book"
    }

})

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
