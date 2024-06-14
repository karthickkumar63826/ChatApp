import express from "express";
import protectRouter from "../middleware/protectRouter";

const router = express.Router();

router.get("/",protectRouter, getUserForSideBar);

export default router;
