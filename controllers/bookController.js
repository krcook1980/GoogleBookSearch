const db = require("../models");

module.exports = {
   findAll: function(req,res){ 
       db.Books.find()
        .sort({date:-1})
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err))
   },

   create: function(req, res){
    db.Books.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(422).json(err))
   },

   findById: function(req,res){
       db.Books.findById(req.params.id)
       .then(result => res.json(result))
       .catch(err => res.status(422).json(err))
   },

   update: function(req, res){
       db.Books.findOneAndUpdate({ _id: req.params.id}, req.body)
       .then(result => res.json(result))
       .catch(err => res.status(422).json(err))
   },
   remove: function(req, res){
       db.Books.findOneAndDelete({ _id: req.params.id})
       .then(result => res.json(result))
       .catch(err => res.status(422).json(err))
   }

}