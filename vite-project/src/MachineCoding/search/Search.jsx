import React, { useState } from 'react'
import { useDebounce } from './useDebounce'
import { getData } from './service'

const Search = ({ searchKey, setSearchKey, setShowResult }) => {

    const handleSearch = (event) => {
        setSearchKey(event.target.value)
    }

    const handleBlur = () => {
        setShowResult(false)
    }

    const handleFocus = () => {
        setShowResult(true)
    }

    return (
        <div>
            <input
                autoFocus
                className='w-lg border border-gray-500 rounded-2xl px-4'
                placeholder='Search' value={searchKey} onChange={handleSearch}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
        </div>
    )
}

export default Search