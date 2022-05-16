import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "../services/user.service";
import {FakeDatabase} from "../services/FakeDatabase";

const userService: UserService = new UserService();

const fakeDatabase: FakeDatabase = new FakeDatabase();


export const UserStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedInUser: { userName: "" } as User,
  }),
  getters: {
    //new
    rAllUser(): User[]{
      return fakeDatabase.rAllUsers()
    },

    //old
    userName: (state) => {
      if (state.loggedInUser.userName != undefined) return state.loggedInUser.userName;
      else return "";
    },
    getAll(){
      return userService.getAll()
    }
  },
  actions: {

    //new

    //user

    cUser(user:User){
      fakeDatabase.cUser(user);
    },
    rUser(userId:number):User{
      return fakeDatabase.rUser(userId);
    },
    uUser(user:User){
      fakeDatabase.uUser(user);
    },
    dUser(user:User){
      fakeDatabase.dUser(user);
    },

    //list

    cList(list:string){
      fakeDatabase.cList(list)
    },

    //old
    createUser(name: string, email: string, password: string) {
      userService
        .createUser(name, email, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
    login(email: string, password: string){
      userService
          .login(email,password)
          .then((user) => (this.loggedInUser = user))
          .catch((err) => console.log(err))
    }
    },
});
