import { Router } from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController";
import authCheck from "../middleware/auth";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authCheck, getProfile);

export default router;