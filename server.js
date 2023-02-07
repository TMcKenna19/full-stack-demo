const express = require("express");
const app = express();
const port = 8000;

// add in our connection to config file
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

// add in our connection to our routes. make sure this is below the code for post requests 
require("./server/routes/game.routes")(app);

app.listen(port, () => console.log(`*** running on port ${port}`));

