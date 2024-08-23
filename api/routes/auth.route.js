import express from "express";
import { signIn, signUP, google, signOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signUP);
router.post("/sign-in", signIn);
router.post('/google',google);
router.get('/signout', signOut);

export default router;
