import express from "express";
import formController from "../controllers/formController.js";

import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", formController.addNewForm);
router.get("/", formController.getForms);

// router.get("/", postController.getPosts);
// router.put("/:pid", postController.updatePost);
// router.delete("/:pid", postController.deletePost);
// router.get("/:pid", postController.getPost);

export default router;
