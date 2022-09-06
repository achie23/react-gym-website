import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const testLength = testimonialsData.length;
    const prevHandler = () => {
      selected === 0 
        ? setSelected(testLength - 1) 
        : setSelected((prev) => prev - 1)
    }
    const nextHandler = () => {
      selected === (testLength - 1) 
        ? setSelected(0) 
        : setSelected((prev) => prev + 1)
    }
    const transition = {
      type: "spring",
      duration: 3
    }
  return (
    <div className="testimonials-container" id="testimonials">
      <div className="testimonials-left">
        <span className="testimonials-header">testimonials</span>
        <span className="stroke-text">what people</span>
        <span>say about us</span>
        <motion.span
          key={selected} 
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={transition}
          >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{color: 'var(--white)'}}>
            {testimonialsData[selected].name} - {" "}
          </span>
          <span style={{color: 'var(--orange)'}}>
            {testimonialsData[selected].status}
          </span>
        </span>
      </div>
      <div className="testimonials-right">
        <motion.div
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{...transition, duration: 2}}
          >
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{...transition, duration: 2}}
          >
        </motion.div>
        <motion.img
          key={selected} 
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={transition}
          src={testimonialsData[selected].image} alt="" 
          />
        <div className="arrows">
          <img onClick={prevHandler} src={leftArrow} alt="" />
          <img onClick={nextHandler} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
