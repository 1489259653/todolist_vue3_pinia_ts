<template>
    <ul class="todo-main">
        <TodoItem  v-for="todo in todoStore.todos" :key="todo.id" :todo="todo" />  
    </ul>
</template>
<script setup lang="ts" name="TodoList">
import TodoItem from './TodoItem.vue';
import {useTodoStore} from '@/stores/todolist'
const todoStore = useTodoStore()


</script>
<style scoped>
.todo-main{
  margin-left:0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
 }
 .todo-empty{
  height: 40px;
  line-height:40px;
  border:1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top:10px;
 }
</style>
