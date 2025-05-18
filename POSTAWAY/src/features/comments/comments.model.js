
import ApplicationEror from "../../middleware/customError.middleware.js";

export default class CommentModel{
    constructor(id, userId, postId, content){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    //get comments for specific post
    static getAll(id){
        let allCommforPost=  [];
        for(var i=0;i<comments.length;i++){
            if(comments[i].postId == id){
                allCommforPost.push(comments[i])
            }
        }

        if(allCommforPost.length == 0){
            throw new ApplicationEror(`No Comments found for post ${id}`);
        }else{
            console.log(allCommforPost)
            return allCommforPost;
        } 
    }
    //add comments for specific post
    static add(id, userId, content){
        const newComment = new CommentModel(
            comments.length+1,
            userId,
            id,
            content
        )
        comments.push(newComment);
    }
    //update a specific comment by id
    static update(id, content){
        const index = comments.findIndex(com=> com.id == id);
        if(index === -1){
            throw new ApplicationEror(`Can not find comment ${id}`);
        }
        comments[index].content = content;
    }
    //delete a specific comment by id
    static delete(id){
        const index = comments.findIndex(com=> com.id == id);
        if(index === -1){
            throw new ApplicationEror(`Can not find comment ${id}`);
        }

        comments.splice(index ,1)
    }
}

const comments = [
   new CommentModel(
        1,
        1,
        1,
        "Comments for Post with id 1 and userid 1"
   ),
    new CommentModel(
        2,
        2,
        2,
        "Comments for Post with id 2 and userid 2"
    ),
    new CommentModel(
        3,
        1,
        1,
        "Another Comments for Post with id 1 and userid 1"
    ),
    new CommentModel(
        4,
        2,
        2,
        "Another Comments for Post with id 2 and userid 1"
    ),
]