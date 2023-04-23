import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-cnt flex flex-center">
        <div className="brand-and-toggler flex align-center">
          <button className="sidebar-show-btn text-white" type="button">
            <div className="fas fa-bars"></div>
          </button>
          <Link>
            <span className='navbar-brand-ico'>
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar