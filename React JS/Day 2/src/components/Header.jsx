import "./Header.css"
import Navbar from "./Navbar";

function Header({ name, course }) {
  return (
    <div className="main">
      <h1>Hi, React JS, My Name {name}</h1>
      <p>Day 2 {course} Class</p>
      <Navbar />
    </div>
  );
}

export default Header;