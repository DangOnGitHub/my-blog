import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="nav nav-tabs justify-content-center">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About Me
        </NavLink>
        <NavLink className="nav-link" to="/blog">
          Blog
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
