const db = require("../models");

module.exports = {
    getBooks: function (req, res) { 
        db.Books.find()
         .sort({date:-1})
         .then(result => {
             console.log("I am in module" + result)
             res.json(result)
         })
         .catch(err => res.status(422).json(err));
    },
    
    saveBook: function(req, res){
        console.log("in controller ", req.body)
        db.Books.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err))
       },
    
    deleteBook: function(req, res){
        db.Books.findOneAndDelete({ _id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err))
    }

};