import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import ConnectDB from "./database/conn.js";
import route from "./router/authRoute.js";
import jobRoute from "./router/jobRoute.js"
import errorMiddleware from "./Middleware/errorMiddleware.js";

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());
app.use(route);
app.use(jobRoute);

app.use(errorMiddleware)

// mongoDB  connection
ConnectDB();

// port
const PORT = process.env.PORT || 3000;

app.listen(5000, () => {
  console.log(`listening to the ${PORT}`);
});
