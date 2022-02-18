import { useState, useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';

const fakeTasks = [
    {id: 1, task: 'Buy Milk', done: false},
    {id: 2, task: 'Buy Beer', done: true},
    {id: 3, task: 'Get Trulys', done: false},
    {id: 4, task: 'Bring Wine', done: false},
    {id: 5, task: 'Buy Paper Towels', done: false}
]

export default function TaskList() {
    const [tasks, setTasks] = useState(fakeTasks)
    useEffect(() => {
        fetch('https://much-todo-dc.uc.r.appspot.com/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(alert)
    }, [])
    return (
        <List 
        bordered
        dataSource= {tasks}
        renderItem= {item => <Task item = {item} />}
        />
    )
}