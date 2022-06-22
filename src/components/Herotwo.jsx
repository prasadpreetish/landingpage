import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
function Herotwo() {
    useEffect(() => {
      Aos.init({ duration: 2000});
    }, [])
    
    return (<div id="my--second--hero--holder">
        <div id="second--hero--holder">
            <div className="red--text">Easy way to build perfect websites</div>
            <h1>Beautifully handcrafted <br /> templates for your website</h1>
            <br />
            <br />
            <p className='faint--text herotwocontent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text</p>
            <div data-aos="fade-up" style={{overflowY: "hidden"}} className="two--partition--content--holder">
                <div  className="twopartition--col--holder">
                <i class="fa-solid fa-pen-ruler"></i> <br />
                    <b>Modern Framework</b> 
                    <div className="faint--text">Lorem Ipsum is simply text the printing and typesetting standard industry.</div></div>
                    

                <div data-aos="fade-up"className="twopartition--col--holder">
                <i class="fa-solid fa-layer-group"></i>
                    <b>Live Website Builder</b>
                    <br />
                    <div className="faint--text">Lorem Ipsum is simply text the printing and typesetting standard industry.</div>
                    
                </div>
            </div>
        </div>
    </div>)
}

export default Herotwo;