import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll'

const Hero = () => {
  const transition = {
    type: 'spring',
    duration: 3
  }
  const mobile = window.innerWidth<=768 ? true : false
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            {/* the best ad */}
            <div className="the-best-ad">
              <motion.div
                initial={{left: mobile? "145px" : "190px"}}
                whileInView={{left: "8px"}}
                transition={{...transition, type: "tween"}}
                >
              </motion.div>
              <span>best fitness club in the city</span>
            </div>
            {/* hero heading */}
            <div className="hero-text">
              <div>
                <span className="stroke-text">Build </span>
                <span>Your</span>
              </div>
              <div>
                <span>Dream body</span>
              </div>
              <div>
                <span>At Cobbies, we help you to shape and build your body and live your best life!</span>
              </div>
            </div>
            {/* figures */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter start={100} end={150} delay="3" preFix="+" />
                </span>
                <span>expert trainers</span>
              </div>
              <div>
                <span>
                  <NumberCounter start={800} end={986} delay="3" preFix="+" />
                </span>
                <span>members registered</span> 
              </div>
              <div>
                <span>
                  <NumberCounter start={0} end={50} delay="3" preFix="+" />
                </span>
                <span>fitness programs</span> 
              </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
              <button className="btn">
                <Link
                  to="join"
                  span={true}
                  smooth={true}
                >
                  Start Now
                </Link>
              </button>
              <button className="btn">
                <Link
                  to="programs"
                  span={true}
                  smooth={true}
                >
                  Learn More
                </Link>
              </button>
            </div>
        </div>

        <div className="right-h">
          <button className="btn">
            <Link
              to="join"
              span={true}
              smooth={true}
            >
            Register Now
          </Link>
          </button>
          <motion.div 
            className="heart-rate"
            initial={{right: "-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}
            >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>120 bpm</span>
          </motion.div>
          {/* hero images */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img 
            initial={{right: "11rem"}}
            whileInView={{right: "20rem"}}
            transition={transition}
            src={hero_image_back} alt="" className="hero-image-back"
            />
          {/* calories */}
          <motion.div 
            className="calories"
            initial={{right: "37rem"}}
            whileInView={{right: "28rem"}}
            transition={transition}
            >
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero
