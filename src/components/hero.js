import img from "../images/home.jpg"

export default function Hero(){
    return(
        <>
            <div>
                <div className="backgound">
                    <img src={img} alt="background" />
                </div>  
            </div>
        </>
    )
}