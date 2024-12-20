import "./footer.css"

export default function Map(){
    return(
        <>
        <div className="map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.1526205684578!2d79.54517830261882!3d12.041203351033545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53506df29620fd%3A0x39f09d432587dc86!2sVikravandi%2C%20Tamil%20Nadu%20605652!5e1!3m2!1sen!2sin!4v1734623150438!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </>
    )
}