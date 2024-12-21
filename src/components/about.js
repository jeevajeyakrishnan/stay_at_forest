import './about.css';
import img1 from "../images/about2.jpg"
import img2 from "../images/about4.jpg"
import img3 from "../images/about1.jpg"
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from 'react'
import resImg from "../images/res-abt-img.png"

function AboutPage() {
    useEffect(()=>{
        Aos.init({duration:1000});
        Aos.init({disable:'mobile'})
    },[]);
    return (
        <div className="about-container" id='about'>
            <h1 data-aos="fade-right" className='abt-head'>Stay Close to Nature <br/><span className='abt-subhead'>- Live Closer to Peace</span> </h1>
            <div className="card">
                <div className="content">
                    <p>Our resort offers traditional mud homes, combining natural materials with a cozy atmosphere.
                    A serene environment surrounded by the sounds of chirping birds and rustling leaves.
                    Eco-friendly, cozy mud houses with earthy aesthetics and cool interiors.
                    Campfire evenings under the starlit sky.
                    Guided nature trails and forest treks.
                    Local organic cuisine prepared with love.
                    </p>
                </div>
                <div className='res-abt-img'><img src={resImg} /></div>
                <div className="image">
                    <img src={img1} alt="About Us" className='abtimg1' data-aos="fade-right"  />
                    <img src={img2} alt='About Us' className='abtimg2' data-aos="fade-left"/>
                    <img src={img3} alt='About Us' className='abtimg3' data-aos="fade-down"/>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
