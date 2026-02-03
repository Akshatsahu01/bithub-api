const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    duration: {
      type: Number, // duration in seconds
      required: true
    },

    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true
    },

    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
