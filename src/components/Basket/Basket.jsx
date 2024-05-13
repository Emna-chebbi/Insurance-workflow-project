import React, { useContext, useState } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

const CustomerInfoForm = ({ handlePurchase }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [townCity, setTownCity] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("Credit Card");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [email, setEmail] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [cvc, setCvc] = useState("");
  const [zipPostal, setZipPostal] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePurchase({
      fullName,
      address,
      townCity,
      paymentInfo,
      creditCardNumber,
      expirationDate,
      email,
      billingZip,
      cvc,
      zipPostal,
    });
  };

  return (
    <form className="customer_info_form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="townCity">City</label>
        <input
          type="text"
          id="townCity"
          name="townCity"
          value={townCity}
          onChange={(e) => setTownCity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentInfo">Payment Info</label>
        <select
          id="paymentInfo"
          name="paymentInfo"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
          required
        >
          <option value="Master Card">Master Card</option>
          <option value="Visa Card">Visa Card</option>
          <option value="Credit Card">Credit Card</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="creditCardNumber">Credit Card Number</label>
        <input
          type="text"
          id="creditCardNumber"
          name="creditCardNumber"
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="expirationDate">Expiration Date</label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="billingZip">Billing Zip</label>
        <input
          type="text"
          id="billingZip"
          name="billingZip"
          value={billingZip}
          onChange={(e) => setBillingZip(e.target.value)}
          placeholder="Enter Billing Zip Code"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cvc">CVC</label>
        <input
          type="text"
          id="cvc"
          name="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="zipPostal">Zip</label>
        <input
          type="text"
          id="zipPostal"
          name="zipPostal"
          value={zipPostal}
          onChange={(e) => setZipPostal(e.target.value)}
          required
        />
      </div>
      <button type="submit">Checkout</button>
    </form>
  );
};

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handleConfirmPurchase = () => {
    setShowCheckoutForm(true);
  };

  const handlePurchase = (formData) => {
    
    console.log("Purchase completed with data:", formData);
    setPurchaseCompleted(true);
    dispath({ type: "EMPTY_BASKET" }); 
  };

  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Shopping cart</span>
          <Link className="favorite_backLink" to={"/"}>
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
        <div className="basket_container">
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
              <span>{state.totalPrice.toLocaleString()}TND</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>discounted price</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} TND</span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>Total amount</span>
              <span>{state.totalPriceFainal.toLocaleString()} TND</span>
            </div>
            {!purchaseCompleted && (
              <button
                onClick={handleConfirmPurchase}
                className="basket_button_buy"
              >
                Confirm purchase
              </button>
            )}
            {showCheckoutForm && (
              <div className="checkout_modal">
                <div className="checkout_modal_content">
                  <span className="close" onClick={() => setShowCheckoutForm(false)}>
                    &times;
                  </span>
                  <CustomerInfoForm handlePurchase={handlePurchase} />
                </div>
              </div>
            )}
            
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
          <span className="favorite_empty_title"> Cart is empty </span>
        </div>
      )}
    </>
  );
}
