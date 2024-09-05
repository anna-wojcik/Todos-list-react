import { useEffect, useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const trim = (content) => {
        return content.trim();
    };

    const addNewTask = (content) => {
        const trimedContent = trim(content);

        if (trimedContent) {
            setTasks(tasks => [
                ...tasks,
                {
                    content: trimedContent,
                    done: false,
                    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                },
            ]);
        }
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    return {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask};
};