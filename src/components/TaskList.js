import { List } from 'antd';
import Task from './Task';

const tasks = [
    {id: 1, task: 'Buy Milk', done: false},
    {id: 2, task: 'Buy Beer', done: false},
    {id: 3, task: 'Get Trulys', done: false},
    {id: 4, task: 'Bring Wine', done: false},
    {id: 5, task: 'Buy Paper Towels', done: false}
]

export default function TaskList() {
    return (
        <List 
        bordered
        dataSource= {tasks}
        renderItem= {item => <Task item = {item} />}
        />
    )
}