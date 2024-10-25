import { Product } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const createProduct = async (productData: Product) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error('Failed to create product');
        }

        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};