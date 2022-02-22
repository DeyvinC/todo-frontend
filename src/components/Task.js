import { useState, useEffect} from 'react';
import { List, Checkbox, message, Popconfirm, Button } from 'antd';
import './Components.css'

export default function Task({ item, setTasks, setLoading }) {
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

    function cancel(e) {
      e.preventDefault();
      console.log(e);
      message.error("Canceled");
    }

    
  const handleDelete = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(`https://much-todo-dc.uc.r.appspot.com/tasks/${item.id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetch("https://much-todo-dc.uc.r.appspot.com/tasks")
          .then((res) => res.json())
          .then((data) => {
            setTasks(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };
    

    return (
  <>
    <List.Item style={itemStyle}>
    <Button className='Button'>
    <Popconfirm
      title="Are you sure you want to delete this task?"
      onConfirm={handleDelete}
      onCancel={cancel}
    >
      Delete
    </Popconfirm>
    </Button>
    <Checkbox  className='Checkbox' onClick={handleToggleTaskDone} 
    checked={item.done}>  
    </Checkbox>
    {item.task}
    </List.Item> 
  </> 
  )
}