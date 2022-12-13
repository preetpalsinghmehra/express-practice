import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import exerciseRouter from "./routes/exercises.js";
import userRouter from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to the databse");
});

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(8000, (req, res) => {
  console.log("Server running..");
});

