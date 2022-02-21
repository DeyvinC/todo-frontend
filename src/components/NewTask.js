import { useState } from 'react'
import { Input } from 'antd'
// import Task from './Task';

export default function NewTask({ setTasks }) {
    const [newTask, setNewTask] = useState('');
    const handleButtonSubmit = () => {
        if(newTask.trim() === ''){  //if the new task is empty
            return // dont do anything
        }
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
                setNewTask('')
                fetch('https://much-todo-dc.uc.r.appspot.com/tasks')
                .then(response => response.json())
                .then(data => setTasks(data))
            }) 
            .catch(err => alert(err))
    }

    const handleInputText = (e) => {
        setNewTask(e.target.value)
    }
    return (
    
        <Input.Search
            placeholder='Enter task here' 
            size='large'
            enterButton='Add Task'
            onSearch= {handleButtonSubmit}
            value={newTask}
            onChange={ handleInputText} 
        />
      
    )
}
//<Button type='primary' size='100'>Add</Button>