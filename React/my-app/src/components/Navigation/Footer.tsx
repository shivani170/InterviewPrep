import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <h3 className="footer-logo">AURA BEAUTY</h3>
            <p className="footer-description">
              Curating luxury organic cosmetics designed to elevate your everyday ritual. Reveal your inner glow with sustainably sourced, premium ingredients.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Pinterest">PIN</a>
              <a href="#" aria-label="Facebook">FB</a>
            </div>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/">New Arrivals</Link></li>
              <li><Link to="/">Best Sellers</Link></li>
              <li><Link to="/">Skincare</Link></li>
              <li><Link to="/">Makeup</Link></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">Brand</h4>
            <ul className="footer-links">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Sustainability</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter-section">
            <h4 className="footer-heading">Join The Circle</h4>
            <p className="newsletter-text">Subscribe to receive first access to new collections and luxury rituals.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="newsletter-input" required />
              <button type="submit" className="newsletter-submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Aura Beauty Inc. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
