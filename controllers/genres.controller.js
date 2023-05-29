const Genre = require("../models/Genre.model");
module.exports.gerenresController = {
    createGenres: async (req, res) => {
      try {const data = await Genre.create({
        name: req.body.name,
        text: req.body.text 
       })
       res.json("жанр успешно добавлен")
    }catch (err){
        res.json(err)
    }
    },
    getGenres: async(req, res)=> {
       try{ const data = await Genre.find({}, {name: 1, text: 1});
        res.json(data)}catch (err){
         res.json(err)
        }
    },
    deleteGenres: async (req, res)=> {
       try {const data = await Genre.findByIdAndDelete(req.params.id);
        res.json("жанр успешно удален")
    }catch (err){
        res.json(err)
    }
    }
}