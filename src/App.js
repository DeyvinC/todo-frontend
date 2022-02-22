import { Layout } from 'antd';
import Main from "./components/Main";
import "./App.css"

function App() {
  return (
    <Layout>
      <Layout.Header className='Header'>
        To-do List
    </Layout.Header>
    <Layout.Content className='Content'>
    <Main />
    </Layout.Content>
    <Layout.Footer className='Footer'> &copy; 2022, Boca Code </Layout.Footer>
    </Layout>
  );
}

export default App;
