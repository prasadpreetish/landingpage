import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Fourmore = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
      }, [])
    return (
        <div className='fourandfoto'>
            <div data-aos="fade-right"  className="fourftrs">
                <div className="fourftrsheading">We are delivering beautiful digital products for you</div>
                <div className="fourftrslist">
                    <div className="ftrbox">
                        <i class="fa-solid fa-desktop"></i>
                        <div className="fourftrscontent"><div className="ftrtitle">Powerful Website Builder</div>
                            <div className="ftrcontent faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</div></div>
                    </div>
                    <div className="ftrbox">
                        <i class="fa-solid fa-book-open"></i>
                        <div className="fourftrscontent"><div className="ftrtitle">Different Layout Type</div>
                            <div className="ftrcontent faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</div></div>
                    </div>
                    <div className="ftrbox">
                        <i class="fa-solid fa-wallet"></i>
                        <div className="fourftrscontent"><div className="ftrtitle">True Responsiveness</div>
                            <div className="ftrcontent faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</div></div>
                    </div>
                    <div className="ftrbox">
                        <i class="fa-solid fa-camera"></i>
                        <div className="fourftrscontent"><div className="ftrtitle">Elegant / Unique design</div>
                            <div className="ftrcontent faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</div></div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"  className="fourfoto"><img src="https://www.themezaa.com/html/pofo/images/services-classic-07.jpg" alt="handshaking" /></div>
        </div>
    )
}

export default Fourmore