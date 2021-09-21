import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from '../Redux/action/Action';

const AddTask = () => {
const [text,setText]=useState("")
const dispatch = useDispatch()
const add =()=>{
  if (text) {
    dispatch (addTask({id:Math.random,task:text.trim(),isDone:false}))
    setText("")
  }
  else
  {
    alert("Empty")
  }}
  return (
    <div>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
       <button onClick={add}> Add Task </button>
      

    </div>
  )}

export default AddTask
