export default class LikesModel{
    constructor(id, userId , postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }

    static get(id){
        let countLike = 0;
        for(var i=0;i<likes.length;i++){
            if(likes[i].postId == id){
                countLike++
            }
        }
        return countLike;
    }

    static toggle(id, userId){
        const index = likes.findIndex(like=>like.postId == id && like.userId == userId);

        if(index === -1){
            const newLike = new LikesModel(
                likes.length+1,
                userId,
                id,
            )
            likes.push(newLike);
            return 'Post Liked';
        }else{

            likes.splice(index , 1);
            return 'Post Unliked';
        }
    }

}


const likes = [
    new LikesModel(
        1,
        1,
        1,
    ),
    new LikesModel(
        2,
        1,
        1,
    ),
    new LikesModel(
        3,
        2,
        2,
    ),
    new LikesModel(
        4,
        2,
        2,
    ),

]