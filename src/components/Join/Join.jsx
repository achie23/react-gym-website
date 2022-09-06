import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        // go to EmailJS dashboard for YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID
        emailjs.sendForm('service_8cmh78m','template_r3yi4lu', form.current, 'dKxG7ysDB40lHu3mc')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }
  return (
    <div className="join-container" id="join">
      <div className="left-join">
        <hr />
        <div>
            <span className="stroke-text">ready to</span>
            <span>shape</span>
        </div>
        <div>
            <span>your body</span>
            <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-join">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder="Enter your Email Address" />
            <button className="btn join-btn">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Join
