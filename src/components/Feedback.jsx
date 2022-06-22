import React from 'react';
import Feedbackcard from './Feedbackcard';

const Feedback = () => {
  return (
    <>
      <div className="feedback--container">
        <div className="feedback--title--cap">
          <div className="faint--text">WHAT PEOPLE SAY</div>
          <div className="feedback--title">CLIENT WORDS</div>
          <hr className="red--text" />
        </div>
        <div className="feedback--scroll">
          <Feedbackcard />
          <Feedbackcard />
          <Feedbackcard />
          <Feedbackcard />
          <Feedbackcard />
        </div>
      </div>

    </>
  )
}

export default Feedback