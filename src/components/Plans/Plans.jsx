import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import rightArrow from '../../assets/rightArrow.png'
import { Link } from 'react-scroll'

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plan-blur-left"></div>
      <div className="blur plan-blur-right"></div>
      {/* plans header */}
      <div className="plans-header">
        <span className="stroke-text">ready to begin</span>
        <span>your journey</span>
        <span className="stroke-text">now with us?</span>
      </div>
      {/* plan categories */}
      <div className="plan-categories">
      {plansData.map((plan, index) => {
        return (
            <div className="plan" key={index}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>
                <div className="features">
                    {plan.features.map((feature, index) => {
                        return (
                            <div className="feature" key={index}>
                                <img src={whiteTick} alt="" />
                                <span key={index}>{feature}</span>
                            </div>
                        )
                    })}                    
                </div>
                <div className="see-more">
                    <span>See more benefits</span>
                    <a href="/">
                        <img src={rightArrow} alt="" />
                    </a>
                </div>
                <button className="btn">
                  <Link
                    to="join"
                    span={true}
                    smooth={true}
                    >
                    Register Now
                  </Link>
                </button>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Plans
