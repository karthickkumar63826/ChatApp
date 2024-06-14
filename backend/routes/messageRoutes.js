import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import protectRouter from "../middleware/protectRouter.js";

const router = express.Router();

router.post("/send/:id", protectRouter, sendMessage);

export default router;
