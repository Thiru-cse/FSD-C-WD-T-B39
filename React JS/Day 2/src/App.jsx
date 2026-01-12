import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  var name = "John";
  var a = 10;
  var b = 10;
  var arr = [1, 2, 3, 4, 5];
  var obj = { batch: "B39", team: "thiru" }
  var arrObj = [
    { id: 1, firstName: "John", designation: 'FE Dev' }, // 0
    { id: 2, firstName: "Doe", designation: 'BE Dev' }, // 1
    { id: 3, firstName: "Arun", designation: 'FSD Dev' }, // 2
  ];

  return (
    <div>
      <h1>
        Hello {name} {a + b}
      </h1>
      <Header name="john" course="FSD" />
      <Navbar arr={arr} />
      <Home obj={obj} />
      <Hero arrObj={arrObj} />
    </div>
  );
}

export default App;
