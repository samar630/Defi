import React from "react"
import "./Subscribe.css"
function Subscribe() {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form action="">
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="enter your email" />
            <button className="btn">sign up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>Yes, I agree to receive email communications from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
