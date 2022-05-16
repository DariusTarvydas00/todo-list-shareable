import { createStore } from "vuex";
import {User} from "@/models/User";

export default createStore({
  state: {
    loggedInUser: { userName: "" } as User,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
