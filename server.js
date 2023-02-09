const express = require("express");
const app = express();
const cors = require("cors"); //install  on backend server "npm install cors"
const port = 8000;

//this is so client/backend servers can communicate 
app.use(cors());

// add in our connection to config file
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

// add in our connection to our routes. make sure this is below the code for post requests 
require("./server/routes/game.routes")(app);

app.listen(port, () => console.log(`*** running on port ${port}`));

