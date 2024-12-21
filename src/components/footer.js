import "./footer.css"

export default function Footer(){
    return(
      <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">Stay at forest .</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>123 Abcde Road, Hudson</p>
          <p>example@gmail.com</p>
          <p>+123 456 7890</p>
          <p>07:00 AM - 10:00 PM</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="#">Email Us</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">How We Work</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Consultation</a></li>
            <li><a href="#">Visit Us</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 All rights reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Services</a>
        </div>
      </div>
    </footer>
  );
};