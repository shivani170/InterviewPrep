import type { ResponseDTO } from "./types"

export const getData = async (query): Promise<ResponseDTO> => {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
        const json = (await response).json()
        return json
    }
    catch (error) {
        throw error
    }
}