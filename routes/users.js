import express from "express";
import User from "../models/user.model.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

userRouter.post("/add", (req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added!!"))
    .catch((err) => res.status(400).json("Error" + err));
});

userRouter.get("/delete", (req, res) => {
  const username = req.body.username;

  User.deleteOne({ username: "Preet" })
    .then(() => console.log("Deleted!!"))
    .catch((err) => console.log("Error" + err));
});

export default userRouter;
