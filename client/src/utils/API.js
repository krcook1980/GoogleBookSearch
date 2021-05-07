import axios from 'axios';

export default {
    getBooks: function(){
      return axios.get("/api/books/");
    },

    getBook: function(id) {
        return axios.get("/api/books/" + id);
      },
    
      deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },
      
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      },
    searchBooks: function(){
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyA1xp2b2tFccWM1as7LAG3-3H33q0oWiSY`)
    }  
      
}