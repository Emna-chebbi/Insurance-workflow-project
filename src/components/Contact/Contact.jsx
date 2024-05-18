import React, { useState } from 'react';
import './Contact.css';
import Footer from "../Footer/Footer";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-container" dir="ltr">
      <div className="contact-page">
        <div className="contact-page-left">
          <header className="contact-page-header">
            <h1>AssureTech</h1> 
          </header>
          <section className="contact-page-about">
            <p>
            At AssureTech, we pride ourselves on being pioneers in the digitized insurance domain. <br />
            Our innovative approach to insurance services ensures that our clients experience unparalleled convenience and efficiency. <br />
            Trust AssureTech to deliver high-quality services catered to your needs. 
            </p>
          </section>
        </div>
        <div className="contact-page-right">
          <section className="contact-page-info contact-page-box">
            <h2>Contact us</h2>
            <p>Email : AssureTech@gmail.com</p>
            <p>Phone : +21629009200</p>
            <p>Address : Rafah street, Tunis, Tunisia</p>
          </section>
          {submitted ? (
            <section className="contact-page-thankyou contact-page-box">
              <h2>Thank you for your feedback!</h2>
              <p>We appreciate you taking the time to leave your review.</p>
            </section>
          ) : (
            <section className="contact-page-review-form contact-page-box">
              <h2>Leave us a Review</h2>
              <p>Your satisfaction is our goal, please leave your feedback below.</p>
              <form onSubmit={handleSubmit}>
                <div className="contact-page-form-group">
                  <label htmlFor="review">Review :</label>
                  <textarea id="review" name="review" required></textarea>
                </div>
                <button type="submit" className="contact-page-button">Submit ✔️</button>
              </form>
            </section>
          )}
          <section className="contact-page-donate contact-page-box">
            <h2>Help the people of Gaza</h2>
            <p><a href="https://www.gofundme.com/f/bidmgg/donate" target="_blank" rel="noopener noreferrer">Click here to donate 🍉</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
