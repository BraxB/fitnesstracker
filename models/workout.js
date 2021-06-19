const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      sets: Number,
      reps: Number,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
