import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./Actiontypes";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask =(id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const completettask = (id) => {
    return {
      type: COMPLETE_TASK,
      payload: id,
    };
  };


  export const edittask = (id,value) => {
    return {
      type: EDIT_TASK,
      payload: {id,value}
    };
  };