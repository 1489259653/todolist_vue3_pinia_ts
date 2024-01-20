import { ref, reactive,computed } from 'vue'
import { defineStore } from 'pinia'
import {nanoid} from 'nanoid'
export const useTodoStore = defineStore('Todo', () => {
  let todos =ref([{id:"001",title:'你好',done:true},
  {id:"002",title:'小学生',done:true},
  {id:"003",title:'望着欧冠要',done:false},]  )
  
  
  const finished = computed(() => {
    var i=0
    todos.value.forEach((todo)=>{
      if(todo.done===true)
        i++
    })
    return i})
  const isAll=computed(()=>finished.value===todos.value.length && todos.value.length>0)
    function addTodo(val:any){
      todos.value.unshift({id:nanoid(),title:val,done:false})
  }
  
  function deleteAll(val:any){
    todos.value=todos.value.filter((todo)=>todo.done !== true)
  }

  function handleCheck(id:any){
      todos.value.forEach((todo)=>{
        if(todo.id===id)
          todo.done=!todo.done
           })
  }

  function deleteHand(id:any){
    todos.value=todos.value.filter((todo)=>todo.id !== id)
  }
  function updateTodo(id:any,val:any){
    todos.value.forEach((todo)=>{
      if(todo.id===id)
        todo.title=val
         })
  }
  return { todos, finished, isAll,deleteAll ,addTodo,handleCheck,deleteHand,updateTodo}
})
