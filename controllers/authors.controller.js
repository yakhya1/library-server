const Author = require("../models/Author.model")
module.exports.authorsController = {
      createAuthor: async (req, res)=> {
        const data = await Author.create({
            name: req.body.name,
            info: req.body.info
        });
        res.json(data)
        
      },
}