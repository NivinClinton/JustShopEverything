import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from './routes/user-route.js';
import productsRouter from "./routes/product-route.js";
import dotenv from 'dotenv'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()

app.use("/api/user",router);
app.use("/api/products",productsRouter);


mongoose
  .connect(
    `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.w7kbj.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected to database"))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));
