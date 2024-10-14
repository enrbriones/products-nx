
import { useCallback, useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import { getProducts } from "../services";


export const useFetchProducts = ()=> {

    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const fetchProducts = useCallback(async () => {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        setIsModalOpen(false);
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {
        products,
        setProducts,
        isModalOpen,
        setIsModalOpen,
        reFetch: fetchProducts
    }
}