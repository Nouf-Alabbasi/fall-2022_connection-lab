let express = require("express");
let app = express();


// to use aframe
// require('aframe');



app.use("/", express.static("public"));


app.listen(3000, ( ) => {
    console.log("app is listening at localhost:3000");
});

