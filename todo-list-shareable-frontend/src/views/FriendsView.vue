<template>
  <div class="search">
    <form @submit.prevent="searchFriend">
      <label>Add friend</label>
      <input v-model="searchFriends" type="number" name="searchFriend">
      <button>Add friend</button>
    </form>
  </div>
  <div>
    <form @submit.prevent="addNewFriend">
      <label>Create friend</label>
      <input v-model="newFriend" name="newFriend">
      <button>Add friend</button>
    </form>
    </div>
  <div>
  <ul>
    <li v-for="friend in friends" :key="friend.UserId" class="friend">
      <h1 :class="friend">{{friend.userName}}</h1>
      <button @click="removeFriend(index)">Remove friend</button>
    </li>
  </ul>
  </div>


</template>

<script>
import {ref} from "vue";
import {User} from "../models/User";
import {UserStore} from "../stores/userStore";

export default {
  setup(){
    const newFriend = ref('');
    const searchFriends = ref('');
    const friends = ref([]);
    const userStore = UserStore();


    function addNewFriend() {

      let friend = new User(1, newFriend.value);
      console.log("User created and added " + friend.userId + friend.userName)
      userStore.cUser(friend)
      friends.value.push(friend);
      newFriend.value = '';
    }

    function searchFriend() {
      let searched = userStore.rUser(searchFriends.value)
      console.log("User searched and added" + searched.userId + searched.userName)
      friends.value.push(searched);
      newFriend.value = '';
    }

    function removeFriend(index) {
      friends.value.splice(index, 1);
    }

    return{
      addNewFriend,
      friends,
      newFriend,
      removeFriend,
      searchFriends,
      searchFriend,
    };
  }
}
</script>

<style scoped>
.friend{
  cursor: pointer;
}
.search{
  float: left;
}
</style>