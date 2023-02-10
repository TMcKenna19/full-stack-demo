const Game = require("../models/game.model");

//Create 
module.exports.createGame = (req, res) => {
    Game.create(req.body)
    .then(newGame => res.json(newGame))
    .catch(err => res.json({message: "Error-> createGame", error: err}))
};

//Read All
module.exports.findAllGames = (req, res) => {
    Game.find()
    .then(allGames => res.json(allGames))
    .catch(err => res.json({message: "Error-> findAllGames", error: err}))
};

//Read One 
module.exports.findOneGame = (req, res) => {
    Game.find({_id: req.params._id})
    .then(oneGame => res.json(oneGame))
    .catch(err => res.json({message: "Error-> findOneGame", error: err}))
}
//Update 
module.exports.updateGame = (req, res) => {
    Game.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(updateOneGame => res.json(updateOneGame))
    .catch(err => res.json({message: "Error-> updateGame", error: err}))
}

//Delete 
module.exports.deleteGame = (req, res) => {
    Game.deleteOne({_id: req.params._id})
    .then(res.json({message: "Game was successfully deleted"}))
    .catch(err => res.json({message: "Error-> deleteGame", error:err}))
}

