import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectToMongoDB from "./db/connectToMongoDB.js";
import dotenv from "dotenv";
import UserModel from "./models/Users.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
connectToMongoDB();

app.post("/api/createUser", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
