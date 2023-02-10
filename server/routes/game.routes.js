const GameController = require("../controllers/game.controller");

module.exports = app => {
    // create 
    app.post("/api/games/create", GameController.createGame);

    // read all
    app.get("/api/games", GameController.findAllGames);

    // read one 
    app.get("/api/games/:_id", GameController.findOneGame);

    // update
    app.put("/api/games/update/:_id", GameController.updateGame);

    // delete 
    app.delete("/api/games/delete/:_id", GameController.deleteGame);
}