import React from 'react'
import './Reasons.css'
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'
import Image4 from '../../assets/image4.jpg'
import Tick from '../../assets/tick.png'
import partnerOne from '../../assets/partners/partner1.png'
import partnerTwo from '../../assets/partners/partner2.png'
import partnerThree from '../../assets/partners/partner3.png'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-section">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <div className="right-section">
        <span>some reasons</span>
        <div className="right-section-header">
            <span className="stroke-text">why</span>
            <span>choose us?</span>
        </div>
        <div className="right-section-details">
            <div>
                <img src={Tick} alt="" />
                <span>over 150+ expert coaches</span>
            </div>
            <div>
                <img src={Tick} alt="" />
                <span>train smarter and faster than before</span>
            </div>
            <div>
                <img src={Tick} alt="" />
                <span>1 free program for new members</span>
            </div>
            <div>
                <img src={Tick} alt="" />
                <span>reliable partners</span>
            </div>
        </div>
        <span>our partners</span>
        <div className="partners">
            <img src={partnerOne} alt="" />
            <img src={partnerTwo} alt="" />
            <img src={partnerThree} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
