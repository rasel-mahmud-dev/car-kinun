import Common from "./Common";

class User extends Common{

    static collectionName = "users";
    firstName = ""
    lastName = 0
    email = ""
    avatar = ""
    password = ""
    roles = []
    createdAt = new Date()
    updatedAt = new Date()

    constructor(data) {
        super(User.collectionName)
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.email = data.email
        this.avatar = data.avatar
        this.password = data.password
        this.roles = data.roles
    }
}


export default User;
