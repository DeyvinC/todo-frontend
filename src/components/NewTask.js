import { useState } from 'react'
import { Input } from 'antd'

export default function NewTask() {
    const [newTask, setTask] = useState('');

    const taskObject = {
        task: newTask,
    }

    const handleButtonSubmit = () => {
        console.log('sending to api')
        /*first thing it takes is the address of the api */
        fetch('https://much-todo-dc.uc.r.appspot.com/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskObject),
        })
            .then(res => res.json())
            .then(data => console.log('data was added'))
            .catch(err => alert(err))
    }

    const handleInputText = (e) => {
        setTask(e.target.value)
    }

    console.log('new task state here', newTask)

    return (
        <>
            <Input
                placeholder='Enter task here'
                onChange={e => handleInputText(e)} />
            <button onClick={handleButtonSubmit}>
                Send new task to api</button>
        </>
    )
}
//<Button type='primary' size='100'>Add</Button>