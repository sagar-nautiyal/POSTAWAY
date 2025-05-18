export default class UserModel{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add(userObj){
        const newObj = new UserModel(
            users.length + 1,
            userObj.name,
            userObj.email,
            userObj.password
        );
        users.push(newObj);
    }
    static signin(email ,password){
        const user = users.find(u=> u.email == email && u.password == password);
        console.log(user)
        if(!user){
            return "User not found!";
        }else{
            return user;
        }
    }
}

const users = [
    new UserModel(
        1,
        "sagar",
        "sagarddn1@gmail.com",
        "Password1"
    ),
    new UserModel(
        2,
        "sagar2",
        "sagarddn2@gmail.com",
        "Password2"
    ),
]