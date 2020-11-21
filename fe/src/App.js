import { Route, Switch } from 'react-router-dom';
import BlogLayout from './layouts/BlogLayout/index';
import AdminLayout from './layouts/AdminLayout/index';
import Login from './containers/Login/index';
import './App.css';
import { useState } from 'react';

function App() {

  const [userInfo, setUserInfo] = useState({});

  return (
    <div>
      <h3>{JSON.stringify(userInfo)}</h3>
      <Switch>
        <BlogLayout path='/' exact />
        <AdminLayout path='/admin' />
        <Route path='/login' render={(props) => <Login path={props.match.path} setUserInfo={setUserInfo} />} />
      </Switch>
    </div>
  );
}

export default App;
