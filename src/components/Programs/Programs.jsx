import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { Link } from 'react-scroll'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* program header */}
        <div className="programs-header">
            <span className="stroke-text">Our Quality</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>
        {/* program-categories */}
        <div className="program-categories">
            {programsData.map((program, index) => {
                return (
                    <div className="category" key={index}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>
                                <Link
                                    to="join"
                                    span={true}
                                    smooth={true}
                                    >
                                    Register Now
                                </Link>
                            </span>
                            <Link
                                to="join"
                                span={true}
                                smooth={true}
                            >
                                <img src={RightArrow} alt="" />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Programs
