import PostModel from "./post.model.js";
export default class PostController{
    getAllPost(req, res){
        const posts = PostModel.getAll();
        return res.status(200).json({success: true, message: posts})
    }
    getPostById(req, res, next){
        try{
            const id = req.params.id;
            const post = PostModel.getById(id);
            return res.status(200).json({success:true , message: post})
        }catch(err){
            next(err)
        }
    }
    getPostOfUser(req, res, next){
        try{
            const id = req.userId;
            const post = PostModel.getPost(id);
            return res.status(200).json({success:true , message: post})
        }catch(err){
            next(err)
        }
    }
    addNewPost(req, res){
        const id = req.userId;
        const {caption} = req.body
        const image = "images/" + req.file.filename;
        PostModel.add(id , caption ,image);
        const posts = PostModel.getPost(id);
        return res.status(201).json({success: true, message: posts})
    }
    updatePost(req, res, next){
        try{
            const id = req.params.id;
            const post = PostModel.update(id , req.body);
            console.log(post)
            return res.status(201).json({success: true , message:post})
        }catch(err){
            next(err);
        }
    }
    deletePost(req , res){
        const id = req.params.id;
        PostModel.delete(id);
        return res.status(200).json({success: true, message: "Post deleted Successfullyy!!"})
    }
}