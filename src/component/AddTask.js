import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from '../Redux/action/Action'

const AddTask = () => {
const [text,settext]=usesState("")
const dispatch = useDispatch()
const add =()=>{
  if (text) {
    dispatch (addTask({id:Math.random,name:text.trim(),isDone:false}))
    setText("")
  }
  else
  {
    alert("Empty")
  }}
  return (
    <div>
      <input onChange{(e)=>setText(e.target.value)}type="text"value={text} />
      <button onlick={add}> Add Task </button>
      

    </div>
  )

export default AddTask;
