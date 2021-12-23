import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h1>The page you're looking for can't be found.</h1>
      <Link to="/">Back to our site</Link>
    </div>
  );
}

export default NotFound;
