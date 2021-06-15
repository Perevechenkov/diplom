import { TASKS } from '../data/data';
import { COMPLETE_TASK, SET_TASKS } from './tasks-actions';

const initalState = {
     tasks: TASKS,
     assignedTasks: [],
     upcomingTasks: [],
     completedTasks: [],
};

export const tasksReducer = (state = initalState, action) => {
     switch (action.type) {
          case SET_TASKS:
               return {
                    ...state,
                    assignedTasks: action.tasks,
                    upcomingTasks: action.tasks,
                    completedTasks: [],
               };
          case COMPLETE_TASK:
               const assignedTaskIndex = state.assignedTasks.findIndex(
                    taskId => taskId === action.taskId
               );

               if (assignedTaskIndex >= 0) {
                    const upcomingTaskIndex = state.upcomingTasks.findIndex(
                         taskId => taskId === action.taskId
                    );
                    if (upcomingTaskIndex >= 0) {
                         
                         return {
                              ...state,
                              upcomingTasks: state.upcomingTasks.splice(
                                   upcomingTaskIndex,
                                   0
                              ),
                              completedTasks: state.completedTasks.concat(
                                   state.upcomingTasks[upcomingTaskIndex]
                              ),
                         };
                    } else {
                         return { ...state };
                    }
               } else {
                    return { ...state };
               }
          default:
               return state;
     }
};
