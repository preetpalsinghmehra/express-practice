import express from "express";
import Exercise from "../models/exercise.model.js";

const exerciseRouter = express.Router();

exerciseRouter.get('/', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Erros" + err));
});

exerciseRouter.post('/add', (req, res) => {
    
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(() => res.json('Exercise Added!!'))
    .catch(err => res.status(400).json('Errors' + err));
});


export default exerciseRouter;
