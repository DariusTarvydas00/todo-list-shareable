import type {User} from "@/models/User";
import {ListTodo} from "../models/ListTodo";


export class FakeDatabase{
    private users: User[] = [];
    private lists: ListTodo[] = [];

    constructor() {
        let messages: [];
    }

    cUser(user: User){
        this.users.push(user)
    }
    rUser(userId: number): User {
        return this.users[userId]
    }
    rAllUsers():User[]{
        return this.users
    }
    uUser(user: User){
        this.users[user.userId] = user
    }
    dUser(user: User){
        this.users.splice(user.userId, 1)
    }

    cList(list: string){
        const lst = new ListTodo(this.lists.length, list);
        this.lists.push(lst)
    }
    rList(listId:number){
        return this.lists[listId]
    }
    uList(list: ListTodo){
        this.lists[list.listId] = list
    }
    dList(list: ListTodo){
        this.lists.splice(list.listId, 1)
    }
}