import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import setSidebarOn from '../../store/sidebarSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {

  const dispatch = useDispatch

  return (
    <nav className='navbar'>

      <div className="navbar-cnt flex flex-center">
        <div className="brand-and-toggler flex align-center">
          <button 
            className="sidebar-show-btn text-white" 
            onClick={() => dispatch(setSidebarOn())}
            type="button"
          >
            <div className="fas fa-bars"></div>
          </button>
          <Link>
            <span className='navbar-brand-ico'>
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Acai</span>Shop
            </span>
          </Link>
        </div>

        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input 
                type="text" 
                className='form-control fs-14' 
                placeholder='Search your preferred items here.' 
              />
              <Link to="/" className='text-white search-btn flex align-center justify-center'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>

          <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            <li className="nav-item no-wrap">
              <Link className='nav-link text-capitalize'>Category Here</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-cart flex align-center">
          <Link to="/cart" className='cart-btn'> 
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">0</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar