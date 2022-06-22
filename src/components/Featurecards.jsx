import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Featurecards(){
    useEffect(() => {
        Aos.init({ duration: 2000});
      }, [])
    return (<div data-aos="fade-up" className="card--box">
            <div className="feature--logo">
            <i class="fa-solid fa-pen-ruler"></i> 
            </div>
            <div className="feature--heading">Pixel Perfect Design</div>
            <div className="feature--description faint--text">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</div>
    </div>)
}

export default Featurecards;