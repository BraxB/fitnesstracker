const router = require("express").Router();
const db = require("../../models");

//gets all workouts with total duration calculated
router.get('/', (req, res) => {
  db.Workout.aggregate([
  { $addFields: {
      totalDuration: { $sum: '$exercises.duration'}
  }}
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//creates a new workout
router.post('/', ({body}, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

//updates a workout with a new exercise
router.put('/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id,
    {
      $push: {
        exercises: req.body
      }
    }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(500).json(err);
    })
})

module.exports = router;
