import "./footer.css"

export default function Footer(){
    return(
        <>
            <div>
            <footer className="footer" id="footer">
        <div className="map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509372!2d144.9537353153167!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c4b8edaf48d0!2sVictoria%20Harbour!5e0!3m2!1sen!2sau!4v1614762214812!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Stay at forest</h3>
            <p>123 Main Street, Melbourne, Australia</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: jeeevasuriya@gmail.com</p>
            <p>Phone: +91 9791530900</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>
              <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
            </p>
          </div>
        </div>
      </footer>  
            </div>
        </>
    )
}