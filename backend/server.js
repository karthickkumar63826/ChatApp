import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`server is running on port no ${port}`);
});
