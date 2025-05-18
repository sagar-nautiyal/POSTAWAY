import express from "express";
import CommentController from "./comments.controller.js";
const commentRouter = express.Router();


//instance of Post Controller

const commentController = new CommentController();

commentRouter.get('/:id' , commentController.getAllComments);
commentRouter.post('/:id' , commentController.postComment);
commentRouter.put('/:id' , commentController.updateComment);
commentRouter.delete('/:id' , commentController.deleteComment);

export default commentRouter;