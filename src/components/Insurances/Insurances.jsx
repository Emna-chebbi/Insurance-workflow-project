import React, { useState } from 'react';
import './Insurances.css';

const InsuranceBoxes = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const handlePurchase = () => {
    // Handle purchase logic here
    console.log('Contract purchased!');
  };

  return (
    <div className="container">
      <div className="insurance-box">
        <h2>Universal Insurance Contract</h2>
        <p>Price: Affordable</p>
        <p>Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p>Coverage: Comprehensive</p>
        <p>Theft Coverage: No</p>
      </div>
      <div className="insurance-box">
        <h2>Premium Insurance Contract</h2>
        <p>Price: Expensive</p>
        <p>Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p>Coverage: Comprehensive</p>
        <p>Theft Coverage: Yes</p>
      </div>
      <form className="purchase-form" onSubmit={handlePurchase}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <input type="text" placeholder="Credit Card Number" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
        <button type="submit">Buy Contract</button>
      </form>
    </div>
  );
};

export default InsuranceBoxes;
