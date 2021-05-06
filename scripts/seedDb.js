const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch");

const booksSeed = [
    {
        title: "The Phantom Tollbooth",
        author: "Norton Justner",
        date: newDate(Date.now()),
        synopsis: "A bored boy finds himself in a magical land that teaches him that life is exciting."
    },
    {
        title: "Eragon",
        author: "Christopher Paolini",
        date: newDate(Date.now()),
        synopsis: "A poor farm boy finds a dragon egg and changes his life forever."
    },
    {
        title: "A Wrinkle In Time",
        author: "Madeline L'Engle",
        date: newDate(Date.now()),
        synopsis: "1963 Newbery Medal winner, fist of five books. A group of teens go on an adventure that could change the universe."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        date: newDate(Date.now()),
        synopsis: "Prelude to Lord of the Rings. A humble hero in a magical world, goes on an extraordinary journey and finds a magical ring."
    }
]

db.Books
  .remove({})
  .then(() => db.Books.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
