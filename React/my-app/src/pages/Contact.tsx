import React, { useState } from 'react'
import './pages.css'

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="contact-container">
            <header className="page-header">
                <span className="subtitle">Connect With Us</span>
                <h1 className="page-title">We'd Love To Hear From You</h1>
            </header>

            <div className="contact-content-grid">
                <div className="contact-info-column glass">
                    <h2>Our Showroom</h2>
                    <p className="showroom-address">
                        742 Luxury Boulevard, Suite 100<br />
                        Beverly Hills, CA 90210
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="detail-label">Client Services</span>
                            <span className="detail-val">concierge@aurabeauty.com</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Press & Partnerships</span>
                            <span className="detail-val">press@aurabeauty.com</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Telephone</span>
                            <span className="detail-val">+1 (800) 555-AURA</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-column glass">
                    {submitted ? (
                        <div className="form-success">
                            <h3>Thank You</h3>
                            <p>Your message has been received. Our concierge will be in touch with you shortly.</p>
                            <button className="reset-form-btn" onClick={() => setSubmitted(false)}>Send Another Message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" required placeholder="Your full name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} required placeholder="How can we assist you?"></textarea>
                            </div>
                            <button type="submit" className="submit-form-btn">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact