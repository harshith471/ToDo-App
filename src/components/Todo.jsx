import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

const[todoList, setTodoList] = useState([]);

const inputRef=useRef();

const add = () =>{
  const inputText=inputRef.current.value.trim();
  
  if(inputText === ""){
    return null;
  }

  const newTodo ={
    id: Date.now(),
    text: inputText,
    isComplete: false,
  }
  setTodoList((prev)=> [...prev, newTodo]);
  inputRef.current.value ="";
}
const deleteTodo = (id)=>{
  setTodoList((prvTodos)=>{
    return prvTodos.filter((todo)=> todo.id !== id)
  } )
}
const toggle = (id)=>{
  setTodoList((prvTodos)=>{
    return prvTodos.map((todo)=>{
      if(todo.id === id){
        return{...todo, isComplete: !todo.isComplete}
      }
      return todo;
    })  

  })
}
useEffect(()=>{
  console.log(todoList);
},[todoList])
 
  return (
    <div className='body'>
        <div className='container'>
            <div className='card'>
                <img className='icon' src={todo_icon} alt="" />
                <h1>To-Do List</h1>
            </div>
            <div className='card2 bg-gray-200'>
                <input ref={inputRef} className='input' type="text" placeholder='Add your task'/>
                <button onClick={add} className='button bg-orange-600 w-32 h-14'>ADD +</button>
            </div>
            <div className='card3'>
              {todoList.map((item,index)=>{
                return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
              })}
            </div>
        </div>
    </div>
  )
}

export default Todo
