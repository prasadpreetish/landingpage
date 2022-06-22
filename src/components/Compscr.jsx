import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
const Compscr = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
      }, [])
    return (
        <>
            <div className="compscr--holder">
                <img src="https://www.themezaa.com/html/pofo/images/logo-1.png" alt="" data-aos="fade-in" className="company" />
                <img src="https://www.themezaa.com/html/pofo/images/logo-2.png" alt="" data-aos="fade-in" className="company" /><img src="https://www.themezaa.com/html/pofo/images/logo-3.png" alt="" data-aos="fade-in" className="company" /><img src="https://www.themezaa.com/html/pofo/images/logo-4.png" alt=""data-aos="fade-in"  className="company" /><img src="https://www.themezaa.com/html/pofo/images/logo-5.png" alt="" data-aos="fade-in" className="company" /><img src="https://www.themezaa.com/html/pofo/images/logo-6.png" alt=""data-aos="fade-in"  className="company" /><img src="https://www.themezaa.com/html/pofo/images/logo-7.png" alt=""data-aos="fade-in"  className="company" />
                <img src="https://www.themezaa.com/html/pofo/images/logo-8.png" alt="" data-aos="fade-in" className="company" />
            </div>
        </>
    )
}

export default Compscr