import React, { useEffect, useState, useMemo } from 'react'
import { Search } from '../Debouncing/Search'
import { getProducts } from './service'
import ProductItem from './ProductItem'
import { Product } from './types'
import Pagination from '../Pagination'
import './ProductsWrapper.css'

const PAGE_SIZE = 10 // Show 10 items per page for professional card display

const ProductsWrapper = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log("Fetched products inside TSX wrapper:", data);
                setProducts(data.products || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [])

    // Reset to page 1 when search query changes
    const handleSearch = (query: string) => {
        setSearchQuery(query)
        setPage(1)
    }

    const filteredProducts = useMemo(() => {
        if (!searchQuery) return products;
        const query = searchQuery.toLowerCase();
        return products.filter(product =>
            product.title?.toLowerCase().includes(query) ||
            product.brand?.toLowerCase().includes(query) ||
            product.category?.toLowerCase().includes(query) ||
            product.description?.toLowerCase().includes(query)
        );
    }, [products, searchQuery]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (page - 1) * PAGE_SIZE;
        return filteredProducts.slice(startIndex, startIndex + PAGE_SIZE);
    }, [filteredProducts, page]);

    const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE)

    return (
        <div className="shop-container">
            <div className="shop-header">
                <span className="subtitle">Curated Collection</span>
                <h1 className="shop-title">Elevate Your Ritual</h1>
                <p className="shop-description">
                    Explore our range of premium cosmetics and clean skincare products formulated with organic botanical extracts.
                </p>
                <div className="shop-controls">
                    <Search onSearch={handleSearch} />
                </div>
            </div>

            <div className="shop-results-info">
                <p className="results-count">
                    Showing {paginatedProducts.length} of {filteredProducts.length} products
                </p>
            </div>

            {paginatedProducts.length > 0 ? (
                <>
                    <div className="products-grid">
                        {paginatedProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <Pagination pages={totalPages} page={page} setPage={setPage} />
                    )}
                </>
            ) : (
                <div className="no-results">
                    <h3>No products found</h3>
                    <p>Try searching for a different keyword or browse our categories.</p>
                </div>
            )}
        </div>
    )
}

export default ProductsWrapper