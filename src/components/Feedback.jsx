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
          <Feedbackcard dpimgsrc="https://www.themezaa.com/html/pofo/images/avtar-14.jpg" dpname="SHOKO MUGIKURA" dppost="DESIGN MANAGER"/>
          <Feedbackcard dpimgsrc="https://www.themezaa.com/html/pofo/images/avtar-13.jpg" dpname="ALEXANDER HARVARD" dppost="CO FOUNDER/CEO"/>
          <Feedbackcard dpimgsrc="https://www.themezaa.com/html/pofo/images/avtar-15.jpg" dpname="LINDSAY SWANSON" dppost="CREATIVE DIRECTOR"/>
          <Feedbackcard dpimgsrc="https://www.themezaa.com/html/pofo/images/avtar-16.jpg" dpname="HERMAN MILLER" dppost="CREATIVE DIRECTOR"/>
        </div>
      </div>

    </>
  )
}

export default Feedback