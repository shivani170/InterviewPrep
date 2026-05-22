
const Interest = ({ data, setData }) => {
    const { interests } = data

    const handleChange = (e) => {
        const { name, checked } = e.target
        setData({
            ...data,
            interests: checked ? [...interests, name] : interests.filter((interest) => interest !== name)
        })
    }

    console.log(data)

    return (
        <div className="mx-auto pt-12 pb-16 font-bold ">

            <div className='form mx-auto border border-gray-500 rounded-2xl px-10 pt-6 pb-10 shadow-lg space-y-4 m-10 flex flex-col'>
                <label htmlFor="coding" className="flex gap-4 cursor-pointer" onClick={(e) => handleChange(e)}>
                    <input className="cursor-poi" type="checkbox" name="coding" value={interests.includes('coding')} onChange={handleChange} />
                    Coding
                </label>
                <label htmlFor="reading" className="flex gap-4 cursor-pointer">
                    <input type="checkbox" name="reading" value={interests.includes('reading')} onChange={handleChange} onClick={(e) => handleChange(e)} />
                    Reading
                </label>
                <label htmlFor="sports" className="flex gap-4 cursor-pointer">
                    <input type="checkbox" name="sports" value={interests.includes('sports')} onChange={handleChange} onClick={(e) => handleChange(e)} />
                    Sports
                </label>
                <label htmlFor="music" className="flex gap-4 cursor-pointer">
                    <input type="checkbox" name="music" value={interests.includes('music')} onChange={handleChange} onClick={(e) => handleChange(e)} />
                    Music
                </label>
                <label htmlFor="travel" className="flex gap-4 cursor-pointer">
                    <input type="checkbox" name="travel" value={interests.includes('travel')} onChange={handleChange} onClick={(e) => handleChange(e)} />
                    Travel
                </label>
            </div>
        </div>

    )
}

export default Interest