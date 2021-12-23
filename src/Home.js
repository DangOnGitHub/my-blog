import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <p>I'm Dang Doan, a software engineer in Ho Chi Minh City. <Link to="/about">More about me.</Link></p>
      <p>I create this site in my free time to learn more about web development and gather my thoughts in the <Link to="/blog">blog</Link> section.</p>
    </div>
  );
}

export default Home;
