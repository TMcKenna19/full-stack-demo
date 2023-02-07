const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/fullStackDemo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("*** the mongoose has been found"))
.catch(err => console.log("mongoose not found", err));

