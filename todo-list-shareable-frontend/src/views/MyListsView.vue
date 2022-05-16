<template>
  <div class="body">
  <div class="leftPanel">
  <form @submit.prevent="addNewTodo">
    <label>New todo</label>
    <input v-model ="newTodo" name="newTodo">
    <button>Add new todo</button>
  </form>
  <button @click="markAllAsDone">Mark all as done</button>
  <button @click="removeAllTodo">Remove all</button>
  <ul>
    <li v-for="todo in todos" :key ="todo.itemId" class="todo">
      <h3 :class="{done: todo.done}" @click="toggleDone(todo)">{{todo.text}}</h3>
      <button @click="removeTodo(index)">X</button>
    </li>
  </ul>
  </div>
  <div class="rightPanel">
    <form @submit.prevent="addNewList">
      <label>New list</label>
      <input v-model ="newList" name="newList">
      <button>Create new list</button>
    </form>
    <form @submit.prevent="searchList">
      <label>Search list</label>
      <input vmodel ="idList" name="idList" type="number" min="0">
      <button>Add new list from db</button>
    </form>
    <ul>
      <li v-for="(listTD, index) in lists" v-bind:key ="index" class="todo">
        <h3 @click="select(listTD)">{{listTD.name}}</h3>
        <button @click="removeList(index)">X</button>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {User} from "../models/User";
import {ListItem} from "../models/ListItem";
import {ListTodo} from "../models/ListTodo";
import {ListStore} from "../store/listStore";

export default {
  setup: function () {
    const newTodo = ref('');
    const newList = ref('');
    const todos = ref([]);
    const lists = ref([]);
    let selected = new ListTodo(0, 'xd');
    const user = new User(1, "Maciek")
    const listStore = new ListStore()

    function addNewTodo() {
      let listItem = new ListItem()
      listItem.itemId = todos.value.length
      listItem.text = newTodo.value
      todos.value.push(listItem);
      selected.list.push(new ListItem(selected.list.length, newTodo.value))
      newTodo.value = '';
    }

    function addNewList() {
      let list = new ListTodo()
      list.listId = lists.value.length
      list.name = newList.value
      listStore.cList(list)
      lists.value.push(list)
      console.log(listStore.rList(list.listId))
      newList.value = ''
    }

    function select(listTD) {
      todos.value.length = 0
      selected = new ListTodo(listTD.listId, listTD.name);
      selected.listId = listTD.listId
      selected.name = listTD.name
      selected.list.forEach(item => todos.value.push(item))
      console.log("Selected " + listTD.name)
    }

    function searchList(listTDId){
      let shit = listStore?.rList(listTDId).value
      console.log(shit)
      //lists.value.push(listStore.rList(listTDId))
    }

    function removeList(index) {
      lists.value.splice(index,1)
    }

    function toggleDone(todo) {
      todo.done = !todo.done;
    }

    function removeTodo(index) {
      todos.value.splice(index, 1)
    }

    function markAllAsDone() {
      todos.value.forEach((todo) => todo.done = true);
    }

    function removeAllTodo() {
      todos.value = [];
    }

    return {
      removeAllTodo,
      markAllAsDone,
      removeTodo,
      toggleDone,
      todos,
      newTodo,
      newList,
      addNewTodo,
      addNewList,
      lists,
      select,
      removeList,
      searchList
    };
  }
}
</script>

<style scoped>

.todo{
  cursor: pointer;
}

.done{
  text-decoration: line-through;
  text-decoration-color: red;
}

.rightPanel {
  width: 50%;
  left: 0;
  float: right;
  justify-content: center;
  text-align: center;
  border-left: #8d9299;
}

.leftPanel{
vertical-align: center;
  width: 50%;
  float: left;
  display: inline-block;
  right: 0;
  text-align: center;
}
.body{
  display: flex;
  flex-direction: row;
}
</style>