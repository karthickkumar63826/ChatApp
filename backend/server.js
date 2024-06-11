import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

dotenv.config();

app.use("/api/auth/", authRoutes);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`server is running on port no ${port}`);
});
