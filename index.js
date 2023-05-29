const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/authors.route"))
app.use(require("./routes/genres.route",))
app.use(require("./routes/books.route"))
app.use(require("./routes/reviews.route"))

mongoose.connect
("mongodb+srv://gaitukaev777:IAKHia22@cluster0.xprg9jb.mongodb.net/yakhya?retryWrites=true&w=majority")
.then(()=> console.log("успешно соединились с Mongodb"))
.catch(()=> console.log("ошибка при соединение"));

app.listen(4000, ()=> {
    console.log("сервер запущен")
})