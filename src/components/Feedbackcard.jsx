import React from 'react'

const Feedbackcard = (props) => {
  return (
    <>
    <div className="feedcard">
        <img src={props.dpimgsrc} alt="girl" className="dp" />
        <div className="dp--review">
Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, outsource companies.
        </div>
        <div className="dp--name">{props.dpname}</div>
        <div className="dp--post faint--text" style={{fontSize:"0.75rem"}}>{props.dppost}</div>
    </div>
    </>
  )
}

export default Feedbackcard