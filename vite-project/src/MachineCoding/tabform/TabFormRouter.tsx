
import Navbar from './Navbar'
import { useState } from 'react'
import { TABS } from './constant'

const TabFormRouter = () => {

    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
        bio: '',
        interests: [],
        theme: 'light'
    })
    const [activeTab, setActiveTab] = useState(0)
    const [error, setError] = useState({
        name: '',
        age: '',
        email: '',
        bio: '',
        interests: [],
        theme: ''
    })

    const handleNext = () => {
        setActiveTab(prev => prev + 1)

    }
    const handlePrev = () => {
        setActiveTab(prev => prev - 1)
    }

    const handleSubmit = () => {
        console.log('Form Data', data)
        alert("Form Submitted Successfully")
    }

    const CurrentComponent = TABS[activeTab].component
    return (
        <div className={data.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
            <div className='tabs-container'>
                <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
                <div className='max-w-3xl m-auto h-full py-10'>
                    <CurrentComponent data={data} setData={setData} />
                </div>
                <div className="flex w-full justify-between px-4 pb-6">
                    {activeTab > 0 && <button className="btn self-start px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition" onClick={handlePrev}>Previous</button>}
                    {activeTab < TABS.length - 1 && <button className="btn self-start px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition" onClick={handleNext}>Next</button>}
                    {activeTab === TABS.length - 1 && <button className="btn self-start px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition" onClick={handleSubmit}>Submit</button>}

                </div>
            </div>
        </div>
    )
}

export default TabFormRouter