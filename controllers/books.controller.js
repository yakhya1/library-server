const Book = require("../models/Book.model");

module.exports.booksController ={
    createBooks: async (req, res) => {
        try {
            const data = await Book.create({
                name: req.body.name,
                authorId: req.body.authorId,
                genreId: req.body.genreId
            });
            res.json(data)
        } catch(err){
            res.json(err)
        }
    },
    deleteBooks: async (req, res) => {
        try{
            await Book.findByIdAndDelete({}),
            res.json("книга учспешна удалена")
        }catch(err){
            res.json(err)
        }
    },
    updateBooks: async (req, res) => {
        try {const data = await Book.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
                authorId: req.body.authorId,
                genreId: req.body.genreId
        }); res.json(data)
    }catch(err){
            res.json(err)
        }
    },
    getIdBooks: async (req, res)=> {
      try{const  data = await Book.findById(req.params.id);
      res.json(data) 
    }catch(err){
        res.json(err)
    }},
    getBooks: async (req, res) => {
        try{ const data = await Book.find({}, {name: 1});
        res.json(data)}catch (err){
         res.json(err)
        }
    },
    getGenreIdBooks: async(req, res) => {
        
       try {const data = await Book.find({genreId: req.body.genreId}).populate("genreId");
        res.json(data);} catch(err){
        res.json(err)
        }
        
    }

}