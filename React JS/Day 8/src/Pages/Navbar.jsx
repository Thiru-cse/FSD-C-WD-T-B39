import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/5">User Detail</Link>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </div>
  );
}

export default Navbar