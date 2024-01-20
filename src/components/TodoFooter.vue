<template>
<div class="todo-footer">
        <label>
          <input type="checkbox" :checked="todoStore.isAll"/>
        </label>
        <span>
          <span>已完成{{todoStore.finished}}</span> / 全部{{todoStore.todos.length}}
        </span>
        <button class="btn btn-danger" @click="todoStore.deleteAll">清除已完成任务</button>
      </div>
</template>
<script setup lang="ts" name="TodoFooter">
import {useTodoStore} from '@/stores/todolist'
const todoStore = useTodoStore()

</script> 
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
