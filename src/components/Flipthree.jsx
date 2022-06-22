import React from 'react'

const Flipthree = () => {
    return (
        <div className="flip--holder">
            <div className="faint--text">WHAT WE DO</div>
            <div className="flip--heading">OUR SERVICES</div>
            <hr />

            <div className="flippin--image--holder">
                <div className="imgbox">
                    <img src="https://www.themezaa.com/html/pofo/images/image-4.jpg" alt="" className="flipit" />
                    <div className="img--caption--title">Design and Development</div>
                    <div className="faint--text">600+ We created web design</div>
                </div>
                <div className="imgbox">
                    <img src="https://www.themezaa.com/html/pofo/images/blog-img1.jpg" alt="" className="flipit" />
                    <div className="img--caption--title">Social Media Marketing</div>
                    <div className="faint--text">475+ We completed marketing</div>
                </div>
                <div className="imgbox">
                    <img src="https://www.themezaa.com/html/pofo/images/blog-img2.jpg" alt="" className="flipit" />
                    <div className="img--caption--title">Mobile App Development</div>
                    <div className="faint--text">475+ We created mobile apps</div>
                </div>

            </div>
        </div>
    )
}

export default Flipthree