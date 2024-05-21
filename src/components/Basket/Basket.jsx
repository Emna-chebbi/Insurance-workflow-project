import React, { useContext, useState } from "react";
import "./Basket.css";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    navigate('/checkout');
  };

  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>🛒</span>
          <Link className="favorite_backLink" to={"/Products"}>
            <HiArrowRight />
            Products page
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title"></div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container" dir="ltr">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>Total</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} TND</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>Discounted price</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} TND</span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>Total amount</span>
              <span>{state.totalPriceFainal.toLocaleString()} TND</span>
            </div>
            <button
              onClick={handleConfirmPurchase}
              className="basket_button_buy"
            >
              Confirm purchase
            </button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              Remove {state.basket.length} item from cart
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title"> </span>
        </div>
      )}
    </>
  );
}
