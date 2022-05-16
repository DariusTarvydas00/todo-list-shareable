export class User {
    userId: number;
    userName: string;
    listArray: [];

    public constructor(id: number, name: string, arr: []) {
        this.userName = name;
        this.userId = id;
        this.listArray = arr;
    }
}
