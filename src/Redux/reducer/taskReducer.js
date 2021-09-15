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

export const TaskReducer = (state = Intialstate, { type, payload }) => {
  switch (type) {
    case ADD_TASK :
      return { ...state, tasklist: [...state.tasklist, payload] };

    case DELETE_TASK:
      return {
        ...state,
        tasklist: state.tasklist.filter((task) => task.id !== payload),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        tasklist: state.tasklist.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasklist: state.tasklist.map((task) =>
          task.id === payload ? { ...task, name: !payload.value } : task
        ),
      };

    default:
      return state;
  }
};
export default TaskReducer;