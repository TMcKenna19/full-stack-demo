const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required:  [true, "Game must have a title"]
    },
    art: {
        type: String,
        required: [true, "Game must have an image"]
    },
    minPlayers: {
        type: Number,
        required: [true, "game must have number of players"],
        min: [1, "At least one player is needed"]
    }
}, {timestamps: true});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;