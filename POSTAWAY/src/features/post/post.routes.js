import express from "express";
import PostController from "./post.controller.js";
import { upload } from "../../middleware/file-upload.middleware.js";
const postRouter = express.Router();


//instance of Post Controller

const postController = new PostController();

postRouter.get('/all', postController.getAllPost);
postRouter.get('/:id', postController.getPostById);
postRouter.get('/', postController.getPostOfUser)
postRouter.post('/' , upload.single('imageUrl'), postController.addNewPost);
postRouter.put('/:id' , upload.single('imageUrl'), postController.updatePost);
postRouter.delete('/:id', postController.deletePost)

export default postRouter;