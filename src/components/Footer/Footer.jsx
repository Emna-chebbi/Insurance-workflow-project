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
          <Link to={"/"}> My Profile</Link>
          <Link to={"/Claims"}>Claims</Link>
          <Link to={"/Insurance"}> Insurances</Link>
          <Link to={"/"}>Sales Shop</Link>
       
        </div>
      </div>
    </footer>
  );
}
