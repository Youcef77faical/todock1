import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import data from "./tasks.json"

const TodoApp = () => {
    const [tasks, setTasks] = useState(data);


    const addTask = (task) => {
        setTasks([...tasks, task]);
    }
    const deleteTask = (taskid) => {
        setTasks(tasks.filter(task => task.id !== taskid))

    };



    const toggleIsFinished = (id) => {
        const index = tasks.findIndex(task => task.id == id);
        const newTasks = [...tasks];
        newTasks[index].isFinished = !newTasks[index].isFinished;
        setTasks(newTasks);
    };

    return (
        <>
            <TodoForm addTask={addTask} />
            <TodoList tasks={tasks} toggleIsFinished={toggleIsFinished} deleteTask={deleteTask} />
        </>
    )
};

export default TodoApp;