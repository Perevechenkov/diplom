export const SET_TASKS = 'SET_TASKS';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const setTasks = tasksArr => {
     return { type: SET_TASKS, tasks: tasksArr };
};
export const completeTask = taskId => {
     return { type: COMPLETE_TASK, taskId: taskId };
};
