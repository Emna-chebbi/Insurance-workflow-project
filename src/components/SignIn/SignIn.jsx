import React from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add the sign-in logic here (e.g., API call)
    // After successful sign-in, navigate to the sales shop page
    navigate('/products');
  };

  return (
    <div className="signin-container" dir='ltr'>
      <h2 className="signin-title">Welcome back</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <input type="email" className="signin-input" placeholder="Email" />
        <input type="password" className="signin-input" placeholder="Password" />
        <button type="submit" className="signin-button">Log in</button>
      </form>
      <p className="signin-signup">
        Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;
