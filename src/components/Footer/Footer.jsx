import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer" dir="ltr">
      <div className="footer_content">
        <div className="footer_logo_box">
          <h2>AssureTech</h2>
          <div className="footer_contact_info">
            <p>Trust AssureTech to deliver high-quality <br /> services catered to your needs.</p>
            <p>AssureTech@gmail.com</p>
            <p>+21629009200</p>
            <p>Tunis, Tunisia</p>
          </div>
        </div>
        <div className="footer_links">
          <Link to={"/Products"}>Sales Shop</Link>
          <Link to={"/Insurance"}>Insurances</Link>
          <Link to={"/Claims"}>Claims</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </div>
      <span onClick={handleToTop} className="go_top">
        <FaArrowUp />
      </span>
    </footer>
  );
}
