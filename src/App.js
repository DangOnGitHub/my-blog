import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/about">About Me</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
