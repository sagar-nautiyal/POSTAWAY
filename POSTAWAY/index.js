import express from 'express';
import swagger from 'swagger-ui-express';
import postRouter from './src/features/post/post.routes.js';
import userRouter from './src/features/user/user.routes.js';
import commentRouter from './src/features/comments/comments.route.js';
import likerouter from './src/features/likes/likes.route.js';
import jwtAuth from './src/middleware/jwt.authentication.js';
import { errorHandler } from './src/middleware/customError.middleware.js';
import loggerMiddleware from './src/middleware/logger.middleware.js';
import apidoc  from "./swagger.json" with {type:'json'};
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api-docs' , swagger.serve , swagger.setup(apidoc));


app.use(loggerMiddleware)

//user route
app.use('/api', userRouter)
//post route
app.use('/api/post', jwtAuth, postRouter);
//comments route
app.use('/api/comments',jwtAuth, commentRouter);
//likes route
app.use('/api/likes',jwtAuth, likerouter)




app.use(errorHandler);


app.listen(3000, (req , res)=>{
    console.log("Server is listening to port 3000")
})