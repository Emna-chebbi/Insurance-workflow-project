import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const location = useLocation();
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/signin';

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      setTimeout(() => {
        let botResponse;
        const userInput = input.toLowerCase();

        if (userInput.includes('insurance contract') && userInput.includes('better')) {
          botResponse = "It depends on your needs, however Premium Plan offers more coverage and includes all sorts of damages that might happen to your phone.";
        } else if (userInput.includes('contract') && userInput.includes('end')) {
          botResponse = "We will send you an email to remind you that your contract has ended and if you would like to renew it.";
        } else if (userInput.includes('discount codes')) {
          botResponse = "We post them on our social media from time to time so be sure to follow us!";
        } else if (userInput.includes('hello') || userInput.includes('hi')) {
          botResponse = "Hello! Welcome to our website.";
        } else if (userInput.includes('thanks') || userInput.includes('thank you')) {
          botResponse = "Always happy to help!";
        } else if (userInput.includes('how are you')) {
          botResponse = "I'm good, and you?";
        } else if (userInput.includes('okay') || userInput.includes('ok') || userInput.includes('good')) {
          botResponse = "Do you have any other questions?";
        } else if (userInput.includes('no') || userInput.includes('yes')) {
          botResponse = "Don't hesitate to ask me anything!.";
        } else {
          botResponse = "Please hold... as we direct you to an agent.";
        }

        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

  if (isAuthPage) {
    return null;
  }

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`} dir='ltr'>
      <div className={`chatbot-toggle ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
        💬
      </div>
      {isOpen && (
        <div className="chatbot-content">
          <div className="chatbot-header">
            <span className="chatbot-title">Assistant</span>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>❌</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
