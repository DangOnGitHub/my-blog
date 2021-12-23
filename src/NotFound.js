import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h1>The page you&apos;re looking for can&apos;t be found.</h1>
      <Link to="/">Back to our site</Link>
    </div>
  );
}

export default NotFound;
