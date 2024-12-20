import AboutPage from "./about";
import Hero from "./hero";
import Gallery from "./gallery"
import Map from "./map"
import Footer from "./footer";

export default function Home(){
    return(
        <>
            <Hero/>
            <AboutPage/>
            <Gallery/>
            <Map/>
            <Footer/>
        </>
    )
}