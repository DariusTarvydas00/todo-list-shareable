import { defineStore } from "pinia";
import type { User } from "@/models/User";
import {FakeDatabase} from "../services/FakeDatabase";
import type {ListTodo} from "../models/ListTodo";

const fakeDatabase: FakeDatabase = new FakeDatabase();


export const ListStore = defineStore({
    id: "listStore",
    state: () => ({
        loggedInUser: { userName: "" } as User,
    }),
    getters: {

    },
    actions: {

        //LIST

        cList(list:string){
            fakeDatabase.cList(list)
        },
        rList(listId:number){
            return fakeDatabase.rList(listId)
        },
        uList(list:ListTodo){
            fakeDatabase.uList(list)
        },
        dList(list: ListTodo){
            fakeDatabase.dList(list)
        },

        //LIST ITEMS

        cListItem(list:string){
            fakeDatabase.cList(list)
        },
        rListItem(listId:number){
            return fakeDatabase.rList(listId)
        },
        uListItem(list:ListTodo){
            fakeDatabase.uList(list)
        },
        dListItem(list: ListTodo){
            fakeDatabase.dList(list)
        }
    },
});
