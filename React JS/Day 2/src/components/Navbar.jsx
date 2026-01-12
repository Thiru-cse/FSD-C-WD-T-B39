function Navbar({arr}) {
    const handle = () => {
        alert("Button Clicked");
    }
    
    return (
      <div>
        <h2>This is Navbar Component</h2>
        <p>{ arr}</p>
        <button onClick={handle}>Click</button>
      </div>
    );
}

export default Navbar;