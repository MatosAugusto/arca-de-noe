import express from "express";

// var cors = require("cors");

import cors from "cors";

import mongoose from "mongoose";

import Dog from "./models/DogInfo";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



app.get("/dogs", async (req, res) => {
    try {
        const dogs = await Dog.find();

        res.status(200).json(dogs);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

app.post("/test", async (req, res) => {
    const data = req.body;

    return res.status(200).send(data);
});

mongoose.set("strictQuery", true);

mongoose
    .connect(
        "mongodb+srv://DW2:DW123@cluster0.9xbgbsq.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected with mongoDB!");
        app.listen(3000, () => {
            console.log("Server is running...");
        });
    })
    .catch((err) => console.log(err));
