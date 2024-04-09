import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/A.png'
import React, { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="nav">
      <Link className="logo" to="/">
        <img src={LogoA} alt="logo" />
      </Link>
      <div className="nav-menu">
        <ul className={`nav-list ${!showMenu && 'active'}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className="nav-link">
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/favorite" className="nav-link">
              Favorite
            </NavLink>
          </li>
        </ul>
        <div
          className={`nav-close ${!showMenu && 'active'}`}
          onClick={toggleMenu}
        >
          <IoClose />
        </div>
      </div>
      <div
        className={`nav-toggle ${showMenu && 'active'}`}
        onClick={toggleMenu}
      >
        <IoMenu />
      </div>
    </nav>
  )
}

export default Navbar
