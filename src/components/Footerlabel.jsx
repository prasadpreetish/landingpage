import React from 'react'

const Footerlabel = () => {
  return (
    <>
        <div className="footlabel--container">
            <div className="faint--text">London based highly creative studio</div>
            <img src="https://www.themezaa.com/html/pofo/images/logo-white@2x.png" alt="logo" className='footimg' />
            <div className="faint--text">On social networks</div>
            <div className="social--icons--footer">
                <a href="https://facebook.com" className="footersocials"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a href="https://twitter.com/" className="footersocials"><i class="fab fa-twitter"></i></a><a href="https://plus.google.com/" className="footersocials"><i class="fab fa-google-plus-g"></i></a><a href="https://instagram.com/" className="footersocials"><i class="fab fa-instagram no-margin-right" aria-hidden="true"></i></a>
            </div>
        </div>
    </>
  )
}

export default Footerlabel