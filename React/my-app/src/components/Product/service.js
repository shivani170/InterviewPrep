export const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=500')
    const products = await res.json();
    return products
}