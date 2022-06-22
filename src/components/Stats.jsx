import React from 'react'
let happyClient = 350;
let photos = 780;
let completed = 850;
let talks = 650;
const Stats = () => {
    return (
        <>
            <div className="fouricon--holder">
                
                <div data-aos="fade-left" className="fouriconbox">
                    <i class="fa-solid fa-desktop"></i>
                    <div className="stat--cap"><div data-aos="slide-up" className="stat">{happyClient} </div>HAPPY CLIENTS</div>
                </div>
                <div data-aos="fade-left" className="fouriconbox">
                <i class="fa-solid fa-camera"></i>
                    <div className="stat--cap"><div data-aos="slide-up" className="stat">{photos} </div>PHOTOS CAPTURED</div>
                </div>
                <div data-aos="fade-left" className="fouriconbox">
                <i class="fa-solid fa-laptop"></i>
                    <div className="stat--cap"><div data-aos="slide-up" className="stat">{completed} </div>WORK COMPLETED</div>
                </div>
                <div data-aos="fade-left" className="fouriconbox">
                <i class="fa-solid fa-phone"></i>
                    <div className="stat--cap"><div data-aos="slide-up" className="stat">{talks} </div>TELEPHONIC TALK</div>
                </div>
            </div>
        </>
    )
}

export default Stats