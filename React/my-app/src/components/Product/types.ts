export interface ReviewDto {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
export interface ProductsDTO {
    id: number;
    title: string;
    images: string[];
    brand: string;
    availabilityStatus: string
    description: string
    reviews: ReviewDto[];
    rating: number;
    stock: number;
    price: number;
    discountPercentage: number;
    tags: string[];
    thumbnail: string;
    category: string;
    returnPolicy: string;

}


export interface ReviewDto {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
export type Product = ProductsDTO

export interface ProductItemTypes {
    product: Product
}