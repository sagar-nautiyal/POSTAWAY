export default class ApplicationEror extends Error{
    constructor(statusCode , errorMessage){
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
    }   
}

export const errorHandler =(err , req, res, next)=>{
    if(err instanceof ApplicationEror){
        return res.status(err.statusCode).send(err.message);
    }
    return res.status(500).send("Oops Something went wrong!!!");
}