import React, { useState } from 'react';
import "./Insurance.css";
import { Link } from "react-router-dom";

const InsurancePlan = ({ plan, standardFeatures, premiumFeatures }) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false); 

  const [contract, setContract] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [theftProtection, setTheftProtection] = useState(false);
  const [termsOfContract, setTermsOfContract] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleTheftProtectionChange = () => {
    setTheftProtection(!theftProtection);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPaymentForm(true); 
  };

  const handleBuyNow = () => {
    setContract('');
    setPricePerDay('');
    setStartDate('');
    setEndDate('');
    setTheftProtection(false);
    setTermsOfContract('');
    setFirstName('');
    setLastName('');
    setEmail('');
    // Alert message
    alert("Thank you for your purchase");
    // Restart the page
    window.location.reload();
  };

  return (
    <div className={`--${plan}`}>
      <h2>{plan} Standard</h2>
      <ul>
        {standardFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>{plan} Premium</h2>
      <ul>
        {premiumFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {showPaymentForm ? ( // Render the payment form if showPaymentForm is true
        <form className="form" onSubmit={handleBuyNow}>
          {/* Payment form fields */}
          <div className="form__row">
            <label htmlFor="cardNumber">Credit Card Number</label>
            <input id="cardNumber" type="text" required/>
          </div>
          <div className="form__row">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input id="expirationDate" type="text" placeholder="MM/YY" required />
          </div>
          <div className="form__row">
            <label htmlFor="cvc">CVC</label>
            <input id="cvc" type="text" required/>
          </div>
          <button className="form-submit-button">Confirm Purchase</button>
        </form>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__row">
            <label htmlFor="contract">Contract</label>
            <select id="contract" value={contract} onChange={(e) => setContract(e.target.value)}>
              <option value="">Select contract type</option>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <div className="form__row">
            <label htmlFor="pricePerDay">Price/day</label>
            <input id="pricePerDay" type="number" value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} required/>
          </div>
          <div className="form__row">
            <label htmlFor="period">Duration</label>
            <input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/> - 
            <input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required/>
          </div>
          <div className="form__row">
            <label htmlFor="termsOfContract">Terms of Contract</label>
            <textarea id="termsOfContract" value={termsOfContract} onChange={(e) => setTermsOfContract(e.target.value)}  required/>
          </div>
          <div className="form__row">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="form__row">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div className="form__row">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <button className="form-submit-button">Proceed to Payment</button>
        </form>
      )}
    </div>
  );
};

const App = () => (
  <div className="plans-container">
    <div className="plan">
      <InsurancePlan 
        plan="Plan" 
        standardFeatures={['Price:50-150', 'Regular Support', 'Monthly period of time', 'Only Minor damages']} 
        premiumFeatures={['Price:200-500', 'Priority Support', 'Yearly period of time','Includes all gadget damages']} 
      />
    </div>
  </div>
);

export default App;