import React from 'react';
import { useSelector } from 'react-redux';
const TaskList = () => {
    const TaskList = useSelector(state.TaskReducer.TaskList)
  return (
    <div>
      {
TaskList.map((el)=><TaskItem todo={el}/>
)
      }
    </div>
  )
}

export default TaskList
