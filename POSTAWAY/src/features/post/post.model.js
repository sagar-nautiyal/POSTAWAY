
import ApplicationEror from "../../middleware/customError.middleware.js";

export default class PostModel{
    constructor(id, userId, caption, imageUrl){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl
    }

    static getAll(){
        return posts;
    }
    static getById(id){ //specific post by id
        const post = posts.find(p=>p.id == id);
        if(!post){
            throw new ApplicationEror("Post not found!");
        }

        return post;
    }
    //all posts for logged in user
    static getPost(id){
        let allPostOfuser=  [];
        for(var i=0;i<posts.length;i++){
            if(posts[i].userId == id){
                allPostOfuser.push(posts[i])
            }
        }

        if(allPostOfuser.length == 0){
            throw new ApplicationEror('Post Not Found');
        }else{
            console.log(allPostOfuser)
            return allPostOfuser;
        } 
    }
    //add a new post
    static add(id , caption ,image){
        const newPost = new PostModel(
            posts.length + 1,
            id,
            caption,
            image
        )

        posts.push(newPost)
    }
    //update a sepecific post
    static update(id ,postObj){
        const post = posts.find(p=> p.id == id);
        console.log(post)
        if(post){
            post.caption = postObj.caption;
            post.imageUrl = postObj.imageUrl;
            console.log(post)
            return post;
        }else{
            throw new ApplicationEror(`Post Not Found with this particular id ${id}`);
        }
        
    }
    //delete a specific post by id
    static delete(id){
        const index = posts.findIndex(p=> p.id == id);
        if(!index){
            throw new ApplicationEror( "Post Not Found");
        }
        posts.splice(index , 1);
        
    }
}

const posts = [
    new PostModel(
        1,
        1,
        "Caption for Product with id 1 and userId 1",
        "https://bindassbooks.com/cdn/shop/files/il_570xN.3693058786_md2b_1024x1024.jpg?v=1701361785",
    ),
    new PostModel(
        3,
        1,
        "Caption for Product with id 3 and userId 1",
        "https://bindassbooks.com/cdn/shop/files/il_570xN.3693058786_md2b_1024x1024.jpg?v=1701361785",
    ),
    new PostModel(
        2,
        2,
        "Caption for Product with id 2 and userId 2",
        "https://thetravelhack.com/wp-content/uploads/2022/02/Atomic-Habits-Book-Summary-540x720.jpeg.webp"
    ),
]


// var products = [
//     new ProductModel(
//         1,
//         "Product 1",
//         "Description of Product 1",
//         29,
//         "https://bindassbooks.com/cdn/shop/files/il_570xN.3693058786_md2b_1024x1024.jpg?v=1701361785" 
//     ),
//     new ProductModel(
//         2,
//         "Product 2",
//         "Description of Product 2",
//         39,
//         "https://thetravelhack.com/wp-content/uploads/2022/02/Atomic-Habits-Book-Summary-540x720.jpeg.webp"
//     ),
//     new ProductModel(
//         3,
//         "Product 3",
//         "Description of Product 3",
//         19,
//         "https://5.imimg.com/data5/SELLER/Default/2022/2/JN/OT/TH/147304712/whatsapp-image-2022-02-11-at-3-26-48-pm-1000x1000.jpeg"
//     )
// ]