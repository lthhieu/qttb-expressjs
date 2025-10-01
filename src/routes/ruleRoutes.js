import express from "express";
import ruleController from "../controllers/ruleController";

import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), ruleController.addNewRule);
router.get("/", ruleController.getRules);

export default router;
