import { useState, useEffect} from 'react';
import { List, Checkbox } from 'antd';
import './Components.css'

export default function Task({ item, setTasks }) {
    const [itemStyle, setItemStyle] = useState({})
    useEffect(() => {
        if(item.done) {
          setItemStyle({ color: 'grey', textDecoration: 'line-through' });
        } else {
          setItemStyle({ color: 'black', textDecoration: 'none' });
        }
      }, [item])

    const handleToggleTaskDone = () => {
      //call api -- patch : `/tasks/${item.id} send the {done: !item.done}
      fetch(`https://much-todo-dc.uc.r.appspot.com/tasks/${item.id}`,
      {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done: !item.done })
      })
      .then(() => {
      // Then:fetch our tasks
      fetch('https://much-todo-dc.uc.r.appspot.com/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      // Then: setTasks(data)
      })
      .catch(alert) 
    }

    const handleDeleteButton = () => {
      fetch(`https://much-todo-dc.uc.r.appspot.com/tasks/${item.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ delete: item.delete})
      })
      .then(() => {
        // Then:fetch our tasks
        fetch('https://much-todo-dc.uc.r.appspot.com/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
        // Then: setTasks(data)
        })
        .catch(alert) 
      }
    

    return (
  <>
    <List.Item style={itemStyle}>
    <button  onClick={handleDeleteButton} className='Button'>Delete</button>
    <Checkbox  className='Checkbox' onClick={handleToggleTaskDone} 
    checked={item.done}>  
    </Checkbox>
    {item.task}
    </List.Item> 
  </> 
  )
}