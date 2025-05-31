import { Router } from "express";
import { NewsController } from "../controllers/newsController";

const router = Router();

// Get all news with company information
router.get("/", NewsController.getAllNews);

export default router;
