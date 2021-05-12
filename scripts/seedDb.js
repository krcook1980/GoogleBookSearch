const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch");

const booksSeed = [{
  title: "The Fellowship of the Ring",
  author: ["John Ronald Reuel Tolkien"],
  description: "The Lord of the Rings is an epic adventure, a beautifully written masterpiece of imaginative fiction of the 20th century. ",
  link: "http://books.google.com/books?id=_FjrugAACAAJ&dq=Lord+of+the+Rings&hl=&source=gbs_api",
  image: "http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
},
{
  title: " The Phantom Tollbooth",
  author: ["Norton Juster"],
  description: "A journey through a land where Milo learns the importance of words and numbers provides a cure for his boredom.",
  link: "http://books.google.com/books?id=87UWNi83IrIC&dq=The+Phantom+Tollbooth&hl=&source=gbs_api",
  image: "http://books.google.com/books/content?id=87UWNi83IrIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
},
{
  title: "Eragon and Eldest Omnibus",
  author: ["Christopher Paolini"],
  description: "ERAGON When Eragon finds a polished stone in the forest, he thinks it is a lucky discovery - perhaps it will buy his family meat for the winter.",
  link: "http://books.google.com/books?id=UB3H_qRStIEC&dq=Eragon&hl=&source=gbs_api",
  image: "http://books.google.com/books/content?id=UB3H_qRStIEC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
},
{
  title: "The Malloreon",
  author: ["David Eddings"],
  description: "An omnibus edition containing the first three novels in the best-selling fantasy series, The Malloreon, follows the adventures and exploits of Garion and his companions in Guardians of the West, King of the Murgos, and Demon Lord of Karanda ...",
  link: "http://books.google.com/books?id=IXGFvkG6DTAC&dq=Malloreon&hl=&source=gbs_api",
  image: "http://books.google.com/books/content?id=IXGFvkG6DTAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
}
   
]

db.Books
  .remove({})
  .then(() => db.Books.collection.insertMany(booksSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
