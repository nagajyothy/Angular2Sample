export class User{
    userId:string;
    password:string;
    constructor(uid:string,pwd:string){
        this.userId = uid;
        this.password= pwd;
    }
}