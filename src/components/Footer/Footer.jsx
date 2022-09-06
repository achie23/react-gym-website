import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import instagram from '../../assets/insta.png'
import linkedin from '../../assets/linkedin.png'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <span className="footer-logo">
                <a href="/">Cobbies</a>
                <a href="/">Fit Club</a>
            </span>
            <div className="footer-navbar">
                <ul className="footer-navbar-items">
                    <li>
                        <Link
                            to="home"
                            span={true}
                            smooth={true} 
                        >Home</Link>
                    </li>
                    <li>
                        <Link 
                            to="programs"
                            span={true}
                            smooth={true}
                        >Programs</Link>
                    </li>
                    <li>
                        <Link 
                            to="reasons"
                            span={true}
                            smooth={true}
                        >Why Us</Link>
                    </li>
                    <li>
                        <Link 
                            to="plans"
                            span={true}
                            smooth={true}
                        >Plans</Link>
                    </li>
                    <li>
                        <Link 
                            to="testimonials"
                            span={true}
                            smooth={true}
                        >Testimonials</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-social">
                <span>Follow Us</span>
                <div className="social-links">
                    <a href="https://github.com/achie23">
                        <img src={github} alt="" />
                    </a>
                    <a href="https://web.facebook.com/">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/feed/">
                        <img src={linkedin} alt="" />
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <span>Copyright &copy; {new Date().getFullYear()}. Destiny Hall Technologies. All Rights Reserved.</span>
        </div>
        <div className="blur footer-blur-left"></div>
        <div className="blur footer-blur-right"></div>
    </div>
  )
}

export default Footer
