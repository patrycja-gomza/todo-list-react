/* import { useState, useEffect } from "react";

export const useTasks = () => {
    const defaultTasks = [
        { id: 1, content: "zrobić pranie", done: false },
        { id: 2, content: "wypić kawę", done: true },
    ];

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks"))
        ||
        defaultTasks
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                }
            };
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => {
            if (newTaskContent !== "") {
                return [
                    ...tasks,
                    {
                        content: newTaskContent,
                        done: false,
                        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                    },
                ];
            };
            return tasks;
        })
    };

    return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask };

};


 */