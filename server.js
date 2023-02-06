const express = require("express");
const app = express();
const port = 8000;

// add in our connection to config file
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended}));

// add in our connection to our routes
// make sure this is below the code for post requests 

app.listen(port, () => console.log(`running on port ${port}`));

