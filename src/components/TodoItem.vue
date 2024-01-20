<template>
<li>
    <label>
        <input type="checkbox" :checked="todo.done" @change="todoStore.handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input ref="inputTitle" v-show="todo.isEdit"  type="text" :value="todo.title" @blur="handleBlur(todo,$event)"/>
    </label>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    <button class="btn btn-danger" @click="todoStore.deleteHand(todoOBJ.todo.id)">删除</button>
    
</li>
</template>
<script setup lang="ts" name="TodoItem">
import {useTodoStore} from '@/stores/todolist'
import { nextTick ,ref} from 'vue';
const todoStore = useTodoStore()
const todoOBJ =defineProps(['todo'])
const inputTitle=ref(null)

function handleBlur(todo:any,e:any){
    todo.isEdit = false
    todoStore.updateTodo(todo.id,e.target.value)
}
function handleEdit(todo:any){
    console.log(todo)
    if(todo.hasOwnProperty.call('isEdit')){
      todo.isEdit=true
    }else{
      Reflect.set(todo,"isEdit",true)
    }
    nextTick(()=>{
      inputTitle.value.focus()
    })
}
</script>
<style scoped>
.btn-edit{
  color: #fff;
  background-color: skyblue;
  border:1px solid rgb(103, 159, 180);
  margin-left: 5px;
}
li:hover{
  background-color: #ddd;
}
 li{
  
  
  list-style: none;
  height:36px;
  line-height:36px;
  padding:0 5px;
  border-bottom:1px solid #ddd;
 }
 label{
  float: left;
  cursor:pointer;
 }

 input{
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top:-1px;
 }
li button{
  float: right;
  display: none;
  margin-top:3px;
 }
 li:before{
  content:initial;
 }
 li:last-child{
  border-bottom:none;
 }
 li:hover button{
  display: block;
}
</style>
