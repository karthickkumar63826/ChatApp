import express from "express";
import protectRouter from "../middleware/protectRouter.js";
import { getUserForSideBar } from "../controllers/userController.js";

const router = express.Router();

router.get("/", protectRouter, getUserForSideBar);

export default router;
