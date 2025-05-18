import LikesModel from "./likes.model.js";

export default class LikesController{
    getAllLikes(req, res){
        const id = req.params.postId;
        const count = LikesModel.get(id);
        return res.status(200).json({success:true , likes: count})
    }
    toggleLikes(req, res){
        const id = req.params.postId;
        const userid = req.userid;
        const likeMessage = LikesModel.toggle(id, userid);
        return res.status(400).json({success:true , message:likeMessage})
    }
}