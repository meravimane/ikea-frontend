// import { FaFacebook } from "react-icons/fa"
import "../Css/footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Join IKEA Family</h4>
          <p>
            Get exclusive offers, inspiration, and lots more to help bring your
            ideas to life. All for free.
          </p>
          <button id="joinBtn">Join us</button>
        </div>
        <div className="footer-column">
          <h4>IKEA Family</h4>
          <p>Login</p>
          <p>Join IKEA Family</p>
          <p>Member offers</p>
          <p>Workshops & Events</p>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <p>Design Your room</p>
          <p>Delivery service</p>
          <p>Installation service</p>
          <p>Assembly service</p>
          <p>Kitchen Planning</p>
          <p>Design Your room</p>
          <p>Delivery service</p>
          <p>Installation service</p>
          <p>Assembly service</p>
          <p>Kitchen Planning</p>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <p>How to shop</p>
          <p>Return policy</p>
          <p>IKEA Catalogue and brochures</p>
          <p>Contact us</p>
          <p>FAQs</p>
          <p>Planner</p>
          <p>Size guide - Beds & mattresses</p>
          <p>Buying guides</p>
          <p>Gift Card</p>
        </div>

        <div className="footer-column">
          <h4>About IKEA</h4>
          <p>This is IKEA</p>
          <p>Newsroom</p>
          <p>Working at IKEA</p>
          <p>This is IKEA</p>
          <p>Newsroom</p>
          <p>Working at IKEA</p>
        </div>
      </div>
      {/* 
        <div className="social-media-icons">
            <FaFacebook />
        </div> */}

      <p className="hr"></p>

      <div className="links">
        <p>© Inter IKEA Systems B.V. 2000-2021</p>
        <div>Terms & Conditions</div>
        <div>Cookie policy</div>
        <div>Cookie settings </div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
};
