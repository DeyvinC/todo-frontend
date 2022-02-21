import { Layout, Menu } from 'antd';
import Main from "./components/Main";

function App() {
  return (
    <Layout>
      <Layout.Header style={{ position: 'fixed', zIndex: 10, width: '100%', color: 'white'}}>
        Much Todo
    </Layout.Header>
    <Layout.Content style={{padding: '0 100px', marginTop: 64}}>
    <Main />
    </Layout.Content>
    <Layout.Footer> &copy; 2022, Boca Code </Layout.Footer>
    </Layout>
  );
}

export default App;
