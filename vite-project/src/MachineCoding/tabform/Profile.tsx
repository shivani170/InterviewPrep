
const Profile = ({ data, setData }: { data: any, setData: any }) => {
    const { name, age, email, bio } = data

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form className='form mx-auto w-full border border-gray-500 rounded-2xl px-10 pt-6 pb-10 shadow-lg space-y-4' onSubmit={(e) => e.preventDefault()}>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" placeholder='Enter your name' className='w-full border border-gray-500 rounded-xl px-4 py-2 outline-none focus:border-blue-500 transition' required value={name} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="age">Age</label>
                <input name="age" type="number" placeholder='Enter your age' className='w-full border border-gray-500 rounded-xl px-4 py-2 outline-none focus:border-blue-500 transition' required value={age} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder='Enter your email' className='w-full border border-gray-500 rounded-xl px-4 py-2 outline-none focus:border-blue-500 transition' required value={email} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" placeholder='Enter your bio' className='w-full border border-gray-500 rounded-xl px-4 py-2 outline-none focus:border-blue-500 transition' required value={bio} onChange={handleChange} />
            </div>
        </form>
    )
}

export default Profile