import { useState } from 'react';
import TaskList from "./TaskList"
import NewTask from "./NewTask"

export default function Main() {
    const [tasks, setTasks] = useState([])
    return (
        <section style={{ background: 'white', padding: '0 40px 40px '}}>
            <TaskList tasks = {tasks} setTasks ={setTasks}/>
            <br />
            {/*<h2> Add New Task </h2>*/}
            <NewTask setTasks ={setTasks} />
        </section>
    )
}