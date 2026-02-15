import "./Footer.css";
import { Link } from "react-router-dom";
import Insta from "../../assets/Instagram.jpg";
import Facebook from "../../assets/Facebook.jpg";
import Telegram from "../../assets/Telegram.jpg";
import Whatsapp from "../../assets/Whatsapp-1.jpg";

export default function Footer() {
  return (
    <footer id="footer-site" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="social-img">
            <button
              className="back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              🡹
            </button>

            <h3>Follow us:- </h3>

            <a href="https://t.me/MastarDrops_Telugu" target="_blank" rel="noreferrer">
              <img src={Telegram} alt="telegram" />
            </a>

            <a href="https://www.instagram.com/mastardropstelugu" target="_blank" rel="noreferrer">
              <img src={Insta} alt="instagram" className="insta-page" />
            </a>

            <a href="https://whatsapp.com/channel/0029VbCMG6PLikgCYlqiy41Q" target="_blank" rel="noreferrer">
              <img src={Whatsapp} alt="whatsapp" />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="facebook" />
            </a>
          </div>

          <p className="footer-disclaimer">
            The products listed on this website may contain affiliate links.
            When you purchase through these links, MastarDrops Telugu may earn a small commission at no extra cost to you.
            This helps us continue sharing the best deals <span><Link to="/admin/login" className="admlogin">with</Link></span> you.
            <br />
            For any queries, contact <strong>mastardropstelugu@gmail.com</strong>.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MastarDrops Telugu.
      </div>
    </footer>
  );
}
