const axios = require('axios');

module.exports = {
    searchBooks: function(req, res){
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.query + "&maxResults=3")
        .then(results => res.json(results.data))
      } 
}