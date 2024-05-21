import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const location = useLocation();
  const { pathname } = location;

  const isAuthPage = pathname === '/signup' || pathname === '/signin';

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setTimeout(() => {
        dispath({ type: "REMOVE_CLASS" });
      }, 1000);
    } else {
      didMount.current = true;
    }
  }, [dispath, state.favorites]);

  if (isAuthPage) {
    return null;
  }

  return (
    <header className="header" dir="ltr">
      <nav className="nav">
        <Link to={"/"} className="logo">
          <img src="images/user.png" alt=""/>
        </Link>
        <Link to={"/Products"} className="logo">
          Sales shop 
        </Link>
        <Link to={"/Insurance"} className="logo">
          Insurances
        </Link>
        <Link to={"/Claims"} className="logo">
          Claims
        </Link>
        <Link to={"/Contact"} className="logo">
          Contact
        </Link>

        <div className="search_header">{pathname === "/" && <SearchBar />}</div>
        <div className="icon_Sopping_box">
          <Link to={"/basket"} className="shoppe_icon_box">
            <AiOutlineShopping className="shop_icon" />
            {state.basket.length > 0 && (
              <span className="badge_shope">{state.basket.length}</span>
            )}
          </Link>
          <Link
            to={"/favorite"}
            className={`mark_icon_box ${state.isFavorite ? "tada" : ""}`}
          >
            <BsFillBookmarkHeartFill className="mark_icon" />
            {state.favorites.length > 0 && (
              <span className="badge_mark">{state.favorites.length}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
