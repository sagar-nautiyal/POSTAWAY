import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController{
    signUp(req, res){
        console.log(req.body);
        UserModel.add(req.body);
        return res.status(201).json({success:true , message: "You are successfully Registered!"})
    }

    signIn(req, res){
        const {email ,password } = req.body;
        const user = UserModel.signin(email ,password);
        console.log(user)
        if(typeof(user) == String){
            return res.status(404).json({success: false , message: user})
        }else{
            //creating a token using sign method
            const token = jwt.sign({userId: user.id , email: user.email} , "yGu90z2q96mdIUWwiY6uorTUpOZeAUdD" , {
                expiresIn: "1h",
            })
            return res.status(200).json({success: true , message: user, token:token})
        }  
    }
}