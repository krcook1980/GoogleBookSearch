import axios from 'axios';

//functions to send to express
export default {
    getBooks: function(){
      return axios.get("/api/books");
    },
   
      deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },
      
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      },
      searchBooks: function(query){
        return axios.get("/api/googlebooks/" + query)
      } 
      
}
