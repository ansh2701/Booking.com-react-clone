import React from 'react'

const MailList = () => {
  return (
    <div className='mail'>
        <h2>Save time, save money!</h2>
        <span>Sign up and we'll send the best deals to you</span>
        <div className="mailForm">
            <input type="text" placeholder='Your email address'/>
            <button className='btn'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList