import express from "express";
import { signUP } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/sign-up',signUP)

export default router;