import { useState } from 'react';
import TaskList from "./TaskList"
import NewTask from "./NewTask"

export default function Main() {
    const [tasks, setTasks] = useState([])
    return (
        <section>
            <h1>Much Todo</h1>
            <TaskList tasks = {tasks} setTasks ={setTasks}/>
            <NewTask setTasks ={setTasks} />
        </section>
    )
}