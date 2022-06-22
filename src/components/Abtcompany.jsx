import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Abtcompany = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, [])
  return (<>
    <div className="abt--holder">
        <img src="https://www.themezaa.com/html/pofo/images/image-8.jpg" alt="About company girl foto" data-aos="fade-right"/>
        <div data-aos="fade-left" className="abt--content--holder">
            <div className="red--text">Wide range of web development services</div><br />
            <div className="abt--heading">Responsive, convenient and multipurpose theme</div><br />
            <div className="abt--content faint--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is printing and typesetting simply dummy text.</div>
            <a href="" ><div className="read--more--button abtcmp"><i class="fa-solid fa-circle-play"></i><div className="white--text"> ABOUT COMPANY</div></div></a>
        </div>
    </div>
    <hr className='hrabt' />
    </>
  )
}

export default Abtcompany