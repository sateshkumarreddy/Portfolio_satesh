import React from 'react';
import './Contact.css';

function Contacts() {
  return (
    <div className="contacts">
      <h2>Contact Me</h2>
      <ul>
        <li>
          📞 <strong>Phone:</strong> <a href="tel:+919390217816">+91 93902 17816</a>
        </li>
         <li>
         📧 <strong>Gmail:</strong> <a href="mailto:sateshkumar1814@gmail.com">sateshkumar1814@gmail.com</a>
        </li>
        <li>
          🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/satesh2023" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/satesh-kumar
          </a>
        </li>
        <li>
          💻 <strong>GitHub:</strong> <a href="https://github.com/sateshkumarreddy" target="_blank" rel="noopener noreferrer">
            github.com/sateshkumar
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
