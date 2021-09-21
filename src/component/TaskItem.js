import React from 'react';
import {useDispatch} from 'react-redux'
import { completettask, deleteTask } from '../Redux/action/Action';
import EditTask from './EditTask';
const TaskItem = ({todo}) => {
  const dispatch= useDispatch()
  return (
    <div>
      <div style ={{ textDecoration:todo.isDone ?"line-through" :null }}>{todo.task}</div>
      <button onClick={()=>dispatch(completettask(todo.id))}>{todo.isDone ?"Undo":"Complete"}</button>
       <EditTask todo={todo}/>
       <button onClick={()=>dispatch(deleteTask(todo.id))} >Delete</button>
     
    </div>
  )
}

export default TaskItem
