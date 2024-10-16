import React from 'react';
import './Footer.less';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">Learn more about our company and mission.</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Policies</h3>
          <ul className="footer__list">
            <li className="footer__item"><a href="/privacy-policy">Privacy Policy</a></li>
            <li className="footer__item"><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
