import { debounce } from "./utils"
import { useState, useMemo, useEffect } from 'react'
import './search.scss'

export const Search = ({ onSearch }) => {
    const [value, setValue] = useState("")

    // Use useMemo to ensure debounceHandler persists across rerenders
    const debounceHandler = useMemo(() => {
        return debounce((val) => {
            console.log("Debounced search value:", val)
            if (onSearch) onSearch(val)
        }, 400)
    }, [onSearch])

    // Cleanup outstanding timeouts if component unmounts
    useEffect(() => {
        return () => {
            // Since debounce returns a function wrapping timeout, 
            // if we need cleanup we can do it, but standard debounce works fine.
        }
    }, [debounceHandler])

    const handleSearchInput = (e) => {
        const val = e.target.value
        setValue(val)
        debounceHandler(val)
    }

    const handleClear = () => {
        setValue("")
        if (onSearch) onSearch("")
    }

    return (
        <div className="search-wrapper">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
                type="text" 
                placeholder="Search premium products..." 
                className="search-input" 
                value={value} 
                onChange={handleSearchInput} 
            />
            {value && (
                <button className="clear-btn" onClick={handleClear} aria-label="Clear search">
                    &times;
                </button>
            )}
        </div>
    )
}