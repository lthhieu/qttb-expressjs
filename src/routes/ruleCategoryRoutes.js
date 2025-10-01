import express from "express";
import ruleCategoryController from "../controllers/ruleCategoryController.js";


const router = express.Router();

router.post("/", ruleCategoryController.addNewRuleCategory);
router.get("/", ruleCategoryController.getRuleCategories);


export default router;
