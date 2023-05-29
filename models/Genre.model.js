const mongoose= require("mongoose");

const genresSchema =  mongoose.Schema({
     name: String,
     text: String
});

const Genre = mongoose.model("Genre", genresSchema);

module.exports = Genre;

