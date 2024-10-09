
import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import { Product } from "../interfaces/product.interface";


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