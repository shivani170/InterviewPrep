import { useEffect, useState } from 'react'
import Search from './Search'
import { getData } from './service'
import type { RecipesTypes } from './types'
import './recipe.scss'

export const Recipe = () => {
    const [searchKey, setSearchKey] = useState("")
    const [result, setResult] = useState<RecipesTypes[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showResult, setShowResult] = useState<boolean>(false)

    const fetchData = async () => {
        try {
            const data = await getData(searchKey)
            setResult(data?.recipes)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => fetchData(), 500)
        return () => clearTimeout(timer)
    }, [searchKey])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (result?.length === 0 && !searchKey) {
        return <div>No result found</div>
    }


    return (
        <div className='py-4 px-4 flex flex-col gap-2 w-lg mx-auto '>
            <h2 className='text-center text-xl font-bold w-full'>Recipe Filter</h2>
            <Search
                searchKey={searchKey}
                setSearchKey={setSearchKey}
                setShowResult={setShowResult}
            />

            {showResult && <div className='recipe-container'>
                {result?.map((recipe) => {
                    return (
                        <div key={recipe.id} className='recipe'>
                            <h4>{recipe.name}</h4>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}
