import express from "express";
import formCategoryController from "../controllers/formCategoryController.js";

import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", formCategoryController.addNewFormCategory);
router.get("/", formCategoryController.getFormCategories);

// router.get("/", postController.getPosts);
// router.put("/:pid", postController.updatePost);
// router.delete("/:pid", postController.deletePost);
// router.get("/:pid", postController.getPost);

export default router;
