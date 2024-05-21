import React, { useState } from 'react';
import './Checkout.css';
import { useLocation } from 'react-router-dom';

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
      <div className="form-group" dir="ltr">
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
        <label htmlFor="creditCardNumber">Card Number</label>
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

const Checkout = () => {
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const handlePurchase = (formData) => {
    const username = generateRandomString(8);
    const password = generateRandomString(10);
    setReceiptData({ ...formData, username, password });
    setPurchaseCompleted(true);
  };

  return (
    <div className="checkout_container">
      {purchaseCompleted ? (
        <>
          <h1>Thank You for Your Purchase!</h1>
          <p>Here's your receipt:</p>
          <p>Transaction completed successfully.</p>
          <p>Username: {receiptData.username}</p>
          <p>Password: {receiptData.password}</p>
          <p> ❗ You can log in using the given details, once you have logged in, you will be able to track the progress of your delivery and receive real-time updates on its status.</p>
        </>
      ) : (
        <CustomerInfoForm handlePurchase={handlePurchase} />
      )}
    </div>
  );
};

export default Checkout;
