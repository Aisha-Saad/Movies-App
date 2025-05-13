import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import "../pages/style.css"
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-main">
         <Link to={"/"} className='text'> Movies App</Link>
      </div>
      <div className="navbar-sub">
        <Link to="/Home">Home  </Link >
      
        <Link to="/Fivoretes">   Fivoretes</Link>
      </div>
    </nav>
  )
}

export default Navbar