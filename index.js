import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Connection } from "./dataBase/index.js";
import Router from "./routes/index.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000
app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", Router);
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

Connection(USERNAME, PASSWORD);