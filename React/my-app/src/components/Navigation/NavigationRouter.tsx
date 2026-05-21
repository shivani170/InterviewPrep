import React from 'react'
import ProductsWrapper from '../Product/ProductsWrapper'
import { Routes, Route } from 'react-router-dom'
import Contact from '../../pages/Contact'
import About from '../../pages/About'
const NavigationRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsWrapper />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default NavigationRouter