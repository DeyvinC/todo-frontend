import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Layout } from 'antd';
import "./App.css"
import Main from "./components/Main";
import Login from './UserLogin/Login'
import TaskList from './components/TaskList';

function App() {
  const [user, setUser] = useState();
  return (
    <>
  <Layout>
    
      <Layout.Header className='Header'>
        To-do List
    </Layout.Header>
    <Layout.Content className='Content'>
    <Main />
    </Layout.Content>
    <Layout.Footer className='Footer'> &copy; 2022, Boca Code </Layout.Footer>
    <Routes>
      <Route path='/login' element={<Login setuser={setUser} user={user} />} />
      <Route path='/tasklist' element={<TaskList setuser ={setUser} user={user} />} 
      />
    </Routes>

    </Layout>
    </>
  );
}

export default App;
