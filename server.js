const express = require ("express");

const mongoose = require ("mongoose");
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3030;

app.use(express.urlencoded({ extend: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhose/goolgebooksearch");

app.listen(PORT, function() {
    console.log(`Server now listening on https://localhost:3030`)
})