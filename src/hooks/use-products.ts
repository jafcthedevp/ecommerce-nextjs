import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';


interface Products {
    title: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
}

export default function useProducts() {

    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState(true);
    
    const createProduct = async () => {
        setLoading(true);

        const { data, error } = await supabase
            .from('products')
            .insert([{
                ...products,
            }])
            .select();
    }
    
    return { products, loading };

}