import { useState } from 'react'
import { Input } from 'antd'
// import Task from './Task';

export default function NewTask({ setTasks }) {
    const [newTask, setNewTask] = useState('');
    const handleButtonSubmit = () => {
        const taskObject = {
            task: newTask,
        }
        console.log('sending to api')
        /*first thing it takes is the address of the api */
        fetch('https://much-todo-dc.uc.r.appspot.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskObject),
        })// cool, we added a new task, now lets update the list
            .then(() => {
                fetch('https://much-todo-dc.uc.r.appspot.com/tasks')
                .then(response => response.json())
                .then(data => setTasks(data))
            }) 
            .catch(err => alert(err))
    }

    const handleInputText = (e) => {
        setNewTask(e.target.value)
    }

    console.log('new task state here', newTask)

    return (
        <Input.Group compact>
            <Input
                placeholder='Enter task here'
                onChange={e => handleInputText(e)} 
                style={{width: 'calc(100% - 100px)'}}/>
            <button onClick={handleButtonSubmit}>
                Send new task to api</button>
        </Input.Group>
    )
}
//<Button type='primary' size='100'>Add</Button>