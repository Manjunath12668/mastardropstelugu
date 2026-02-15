import { useEffect, useRef, useState } from "react";
import "./CustomerNavbar.css";
import Logo from "../../assets/Logo.jpg";
import whatsapp from "../../assets/Whatsapp-1.jpg";
import telegram from "../../assets/Telegram.jpg";
import searchicon from "../../assets/Search-icon-1.png";

export default function Navbar({ onSearch }) {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;

          if (current > lastScroll.current && current > 80) {
            setHidden(true);
          } else {
            setHidden(false);
          }

          lastScroll.current = current;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`header ${hidden ? "hide" : ""}`}>
        <div className="logo-navbar">
          <div className="logoimg">
            <img src={Logo} alt="Logo" />
            <h2>
              MastarDrops Telugu <br />
              <span>@mastardropsTelugu</span>
            </h2>
          </div>

          <div className="Channel-container">
            <h3>Daily Loots :-</h3>
            <div className="channel-logo">
              <a href="https://t.me/MastarDrops_Telugu" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Telegram" />
              </a>
              <a href="https://whatsapp.com/channel/0029VbCMG6PLikgCYlqiy41Q" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>

        <div className="search-wrapper">
          <div className="downarrow">
            <a href="#footer-site">🢃</a>
          </div>

          <input
            type="text"
            placeholder="Search Products Name or Serial Id..."
            className="search-input"
            onChange={(e) => onSearch(e.target.value)}
          />

          <button className="search-btn">
            <img src={searchicon} alt="Search" />
          </button>
        </div>
      </div>

      <div className="header-space"></div>
    </>
  );
}
