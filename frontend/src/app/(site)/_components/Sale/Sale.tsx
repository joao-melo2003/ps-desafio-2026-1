'use client'

import styles from './Sale.module.css';
import ProductCard from './ProductCard';
import { sportsItemType } from '@/types/sportsItem';
import { useEffect, useState } from 'react';
import { api } from '@/services/api'
import { useCategory } from "@/app/(site)/_components/Navbar/CategoryContext";

export default function Sale(){

    const { categoriaSelecionada, search } = useCategory();

    const [products, setProducts] = useState<sportsItemType[]>([]);

    useEffect(()=>{
        async function getProducts(){
            const {response, error} = await api('GET', '/products');

            if(response){
                setProducts(response as sportsItemType[]);
            }else{
                console.error(error?.message);
            }
        }

        getProducts();
    }, [])


    const produtosFiltrados = products.filter(p => {
        const matchCategoria = categoriaSelecionada? p.category.id === categoriaSelecionada: true;

        const matchNome = search ? p.name.toLowerCase().includes(search.toLowerCase()) : true;

        return matchCategoria && matchNome;
    });

    return(
        <section className={styles.sale}>
            <div className={styles.vitrine}>
                {
                    produtosFiltrados.map((produto) => (<ProductCard key={produto.id} {...produto}/>))
                }
            </div>

            <div className={styles.promocoes}>
                {/*promocoes*/}
            </div>
        </section>
    )
}

