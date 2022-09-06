import React, { useState } from 'react'
import './Header.css'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)
  const openMenu = () => {
    setMenuOpened(true)
  }
  const closeMenu = () => {
    setMenuOpened(false)
  }
  return (
    <div className="header" id="home">
        <span className="logo">
          <a href="/">Cobbies</a>
          <a href="/">Fit Club</a>
        </span>
        {menuOpened === false && mobile === true 
          ? <div 
              style={{backgroundColor: "var(--appColor)", height: "1.5rem", padding: "0.5rem", borderRadius: "5px"}}
              onClick={openMenu}
              >
              <img src={bars} alt="" style={{width: "1.5rem", height: "1.5rem"}} />
            </div>
          : <ul className="header-menu">
            <li>
              <Link 
                onClick={closeMenu}
                activeClass="active"
                to="home"
                span={true}
                smooth={true}
              >Home</Link>
            </li>
            <li>
              <Link 
                onClick={closeMenu}
                to="programs"
                span={true}
                smooth={true}
              >Programs</Link>
            </li>
            <li>
              <Link 
                onClick={closeMenu}
                to="reasons"
                span={true}
                smooth={true}
              >Why Us</Link>
            </li>
            <li>
              <Link 
                onClick={closeMenu}
                to="plans"
                span={true}
                smooth={true}
              >Plans</Link>
            </li>
            <li>
              <Link 
                onClick={closeMenu}
                to="testimonials"
                span={true}
                smooth={true}
              >Testimonials</Link>
            </li>
        </ul>
        }
        
    </div>
  )
}

export default Header
