import React from 'react'
import './pages.css'

const About = () => {
    return (
        <div className="about-container">
            <header className="page-header">
                <span className="subtitle">The Aura Legacy</span>
                <h1 className="page-title">Pure, Clean, Intentional</h1>
            </header>

            <div className="about-content-grid">
                <div className="about-text-column">
                    <h2>Our Philosophy</h2>
                    <p>
                        Founded in 2024, Aura Beauty was born out of a desire to simplify self-care rituals without compromising on luxury or efficacy. We believe that what you put on your body is just as important as what you put in it.
                    </p>
                    <p>
                        We merge advanced botanical science with clean, organic active ingredients to create formulas that nourish, protect, and illuminate. Every product is crafted in small batches to preserve potency and freshness.
                    </p>
                </div>
                
                <div className="about-image-card glass">
                    <div className="card-brand-mark">A</div>
                    <blockquote>
                        "Nature does not hurry, yet everything is accomplished."
                    </blockquote>
                    <cite>&mdash; Lao Tzu</cite>
                </div>
            </div>

            <div className="values-section">
                <h2 className="section-title">Core Pillars</h2>
                <div className="values-grid">
                    <div className="value-card glass">
                        <div className="value-icon">1</div>
                        <h3>Sustainably Sourced</h3>
                        <p>We work directly with certified organic growers to ensure fair-trade practices and zero eco-system harm.</p>
                    </div>
                    <div className="value-card glass">
                        <div className="value-icon">2</div>
                        <h3>100% Vegan & Clean</h3>
                        <p>Formulated without sulfates, parabens, phthalates, synthetic fillers, or animal testing.</p>
                    </div>
                    <div className="value-card glass">
                        <div className="value-icon">3</div>
                        <h3>Proven Efficacy</h3>
                        <p>Every active botanical is clinically tested to deliver visible, age-defying results naturally.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About