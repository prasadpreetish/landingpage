import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Threeiccontent = () => {
    useEffect(() => {
        Aos.init({});
      }, [])
    return (
        <>
            <div className="threeiccontholder"  style={{overflowY: "hidden"}} >
                <div data-aos="fade-up" className="iccont--box">
                    <i class="fa-solid fa-desktop iccicon"></i>
                    <div className="head--iccont">
                        <div className="headicc">Modern Framework</div>
                        <div className="iccont faint--text">Lorem Ipsum is simply text the printing and typesetting standard industry.</div></div>
                </div>
                <div data-aos="fade-up" className="iccont--box">
                <i class="fa-solid fa-book" style={{padding:"0rem 1rem"}}></i>
                    <div className="head--iccont">
                        <div className="headicc">Web Interactive</div>
                        <div className="iccont faint--text">Lorem Ipsum is simply text the printing and typesetting standard industry.</div></div>
                </div>
                <div data-aos="fade-up" className="iccont--box">
                <i class="fa-solid fa-gift" style={{padding:"0rem 1rem"}}></i>
                    <div className="head--iccont">
                        <div className="headicc">Graphic Design</div>
                        <div className="iccont faint--text">Lorem Ipsum is simply text the printing and typesetting standard industry.</div></div>
                </div>
            </div>
        </>
    )
}

export default Threeiccontent