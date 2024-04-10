import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/A.png'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faBlogger,
} from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="logo" to="/">
          <img src={LogoA} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleShowMenu}>
          <IoMenu />
        </div>
        <div className={`nav-elements  ${showMenu && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/wenxuan-zhou-89348020b/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Aries-0331"
              >
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://urchinzhou.com">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
