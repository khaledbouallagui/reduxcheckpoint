import React from 'react';
import {useDispatch} from 'react-redux'
import EditTask from './EditTask';
const TaskItem = ({todo}) => {
  const dispatch= useDispatch()
  return (
    <div>
      <div style ={{ textDecoration:todo.isDone ?"line-through" :null }}>{todo.name}</div>
      <button onClick={()=>dispatch(completetask(todo.id))}>{todo.isDone?"Undo":Complete</button>
     <EditTask todo={todo}/>
      <buttton onClick={()=>dispatch (deleteTask (todo.id))}>Delete</buttton>
    </div>
  )
}

export default TaskItem
