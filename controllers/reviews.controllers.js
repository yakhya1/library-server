const Review  = require("../models/Review.model");
module.exports.reviewControllers = {
    createReview: async (req, res) => {
        const data = await Review.create ({
            name: req.body.name,
            user: req.body.user,
            booksId: req.body.booksId
        });
        res.json(data)
    },
    deleteReview: async (req, res) => {
        const data = await Review.findByIdAndDelete({});
        res.json(data)
    },
    getReview: async(req, res)=>{
        const data = await Review.find({booksId: req.params.booksId}).populate("booksId");
        res.json(data)

    }

}