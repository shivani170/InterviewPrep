
const Setting = ({ data, setData }) => {
    const { theme } = data

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <div className="mx-auto pt-12 pb-16 font-bold ">

            <div className='form mx-auto border border-gray-500 rounded-2xl px-10 pt-6 pb-10 shadow-lg space-y-4 m-10 flex flex-col'>
                <label htmlFor="dark" className="flex gap-4">
                    <input checked={theme === 'dark'} type="radio" name="theme" value="dark" onChange={handleChange} />
                    Dark Mode
                </label>
                <label htmlFor="light" className="flex gap-4">
                    <input checked={theme === 'light'} type="radio" name="theme" value="light" onChange={handleChange} />
                    Light Mode
                </label>
            </div>
        </div>
    )
}

export default Setting