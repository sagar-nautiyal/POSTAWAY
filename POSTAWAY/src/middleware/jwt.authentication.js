import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next)=>{
    //getting token from headers
    const token = req.headers['authorization'];

    if(!token){
        res.status(404).json({success:false , message: 'Unauthorized!!'});
    }

    try{

        //verify and saving  the details to payload
        const payload = jwt.verify(token , "yGu90z2q96mdIUWwiY6uorTUpOZeAUdD");
        console.log(payload);
        req.userId = payload.userId;
    }catch(error){
        console.error(error);
        return res.status(401).send("Unauthorized!!")
    }

    next();

}

export default jwtAuth;