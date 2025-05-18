import CommentModel from "./comments.model.js";

export default class CommentController{
    getAllComments(req, res, next){
        try{
            const id = req.params.id;
            const comments = CommentModel.getAll(id);
            return res.status(200).json({success:true , message:comments}); 
        }catch(err){
            nextTick(err)
        }
    }

    postComment(req, res , next){
        try{
            const id = req.params.id;
            const userId = req.userId;
            const {content} = req.body;
            const comment = CommentModel.add(id, userId, content);
            return res.status(201).json({success: true , message: "Comment Added Successfully"});
        }catch(err){
            next(err)
        }
    }

    updateComment(req, res){
        const id = req.params.id;
        const {content} =req.body;
        CommentModel.update(id, content);
        return res.status(201).json({success:true , message: "Updated Comment Successfully!!"})
    }

    deleteComment(req, res){
        const id = req.params.id;
        CommentModel.delete(id);
        return res.status(200).json({success: true , message: "Comment Deleted Succesfully!"})
    }
}