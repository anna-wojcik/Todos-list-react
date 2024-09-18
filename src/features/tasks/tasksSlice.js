import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                id: 1,
                content: "Podlać kwiaty",
                done: false,
            },
            {
                id: 2,
                content: "Zrobić obiad",
                done: true,
            },
            {
                id: 3,
                content: "Zrobić pranie",
                done: false,
            }
        ],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            tasks.pop(task => task.id === taskId);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            };
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(task => task.done);

export default tasksSlice.reducer;