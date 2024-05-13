import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      <div className="footer_last">
        <div className="footer_link_box">
          <Link to={"/basket"}> Shopping cart</Link>
          <Link to={"/favorite"}>Favorites</Link>
       
        </div>
      </div>
    </footer>
  );
}
