import { Switch } from 'react-router-dom';
import BlogLayout from './layouts/BlogLayout/index';
import './App.css';

function App() {
  return (
    <Switch>
      <BlogLayout path='/' />
    </Switch>
  );
}

export default App;
