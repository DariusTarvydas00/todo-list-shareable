import { createStore } from "vuex";
import {auth} from "@/auth/store/auth.module";
const store = createStore({
    modules: {
        auth,
    },
});
export default store;