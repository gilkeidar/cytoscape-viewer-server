const express = require("express");
const path = require("path");
var app = express();

var item;

console.log("item:", item);

app.get("/", (req,res) => {
    item = req.query.item;
    console.log("item from get:", item);
    res.sendFile(__dirname + "/public/index.html");
})

//Capabilities here:
app.get("/getItem", (req,res) => {
    console.log("item in /getItem:", item);
    res.send([item]);
})


app.use(express.static(path.join(__dirname, "public"))); 

var port = 3000;
var hostname = "127.0.0.1";

app.listen(port, hostname, () => {
    console.log("Server is listening on port", port);
})