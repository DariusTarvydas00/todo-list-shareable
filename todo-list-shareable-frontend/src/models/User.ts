export class User {
    userId: number;
    username: string;
    password: string;
    email: string;
    listArray: [];

    public constructor(id: number, username: string, password: string, email:string, arr: []) {
        this.userId = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.listArray = arr;
    }
}