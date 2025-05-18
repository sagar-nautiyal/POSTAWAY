import express from "express";
import LikesController from "./likes.controller.js";
const likerouter = express.Router();

const likeController = new LikesController();


likerouter.get('/:postId' , likeController.getAllLikes);
likerouter.get('/toggle/:postId' , likeController.toggleLikes);




export default likerouter;