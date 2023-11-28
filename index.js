import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Connection } from "./dataBase/index.js";
import Router from "./routes/index.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000
app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", Router);
const url = process.env.MONGODB_URL;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

Connection(url);