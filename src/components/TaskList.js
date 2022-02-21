import {  useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';


export default function TaskList({ tasks, setTasks }) {
    useEffect(() => {
        fetch('https://much-todo-dc.uc.r.appspot.com/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(alert)
    }, [setTasks])
    return (
        <List 
        bordered
        dataSource= {tasks}
        renderItem= {item => <Task item = {item} />}
        />
    )
}