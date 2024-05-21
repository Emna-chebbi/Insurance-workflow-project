import React from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add the sign-up logic here (e.g., API call)
    // After successful sign-up, navigate to the sign-in page
    navigate('/signin');
  };

  return (
    <div className="signup-container" dir='ltr'>
      <h2 className="signup-title">Create an Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" className="signup-input" placeholder="Name" />
        <input type="email" className="signup-input" placeholder="Email" />
        <input type="password" className="signup-input" placeholder="Password" />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="signup-signin">
        Already have an account? <Link to="/signin" className="signup-link">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
