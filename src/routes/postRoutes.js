import express from "express";
import postController from "../controllers/postController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("thumbnail"), postController.addNewPost);
router.get("/", postController.getPosts);
router.put("/:pid", postController.updatePost);
router.delete("/:pid", postController.deletePost);
router.get("/:pid", postController.getPost);

export default router;
