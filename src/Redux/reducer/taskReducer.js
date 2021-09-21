import { ADD_TASK, COMPLETE_TASK , DELETE_TASK, EDIT_TASK } from "../action/Actiontypes";

const Intialstate = {
  taskList: [
    {
      id: 0,
      task: "Learn HTML And CSS",
      isDone: true,
    },

    {
      id: 1,
      task: "Learn JS And ES6",
      isDone: true,
    },

    {
      id: 2,
      task: "Learn NODE jS",
      isDone: false,
    },
  ],
};

const taskReducer = (state = Intialstate, { type, payload }) => {
  switch (type) {
    case ADD_TASK :
      return { ...state, taskList: [...state.taskList,payload] };

    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((el) => el.id !== payload)
      };

    case COMPLETE_TASK:
      return {
       ...state,
       taskList:state.taskList.map(
         (el)=>el.id===payload ? {...el,isDone:!el.isDone}:el
       ),
      };

    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((el) =>
          el.id === payload.id ? {...el,task:payload.value } : el
        ),
      };

    default:
      return state;
  }
};
export default taskReducer