import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <div className='nav p-2'>
            <h2 className='nav-brand'>Employee Manager</h2>
            <div className=''>
            <Link to="/" className='nav-a homee'>Home</Link>
            <Link to="/form" className='nav-a'>Add Emp</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
