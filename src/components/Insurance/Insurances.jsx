import React from 'react';
import "./Insurances.css";
const InsurancePlan = ({ plan, price, features }) => {
  return (
    <div className={`plan plan--${plan}`}>
      <h2 className="plan__title">{plan} Plan</h2>
      <p className="plan__price">${price}</p>
      <ul className="plan__features">
        {features.map((feature, index) => (
          <li key={index} className="plan__feature">
            {feature}
          </li>
        ))}
      </ul>
      <button className="plan__button">Buy Now</button>
    </div>
  );
};

const App = () => {
  const basicFeatures = [
    'Basic Coverage',
    'Limited Support',
    '1 Year Contract',
  ];

  const standardFeatures = [
    'Standard Coverage',
    'Regular Support',
    '2 Year Contract',
  ];

  const premiumFeatures = [
    'Premium Coverage',
    'Priority Support',
    '3 Year Contract',
  ];

  return (
    <div className="plans">
      <InsurancePlan plan="Basic" price={100} features={basicFeatures} />
      <InsurancePlan plan="Standard" price={200} features={standardFeatures} />
      <InsurancePlan plan="Premium" price={300} features={premiumFeatures} />
    </div>
  );
};

export default App;