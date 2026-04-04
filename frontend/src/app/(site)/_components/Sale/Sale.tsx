'use client'

import styles from './Sale.module.css';
import ProductCard from './ProductCard';
import { sportsItemType } from '@/types/sportsItem';
import { useEffect, useState } from 'react';
import { api } from '@/services/api'

export default function Sale(){

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


    return(
        <section className={styles.sale}>
            <div className={styles.vitrine}>
                {
                    products.map((produto) => (<ProductCard key={produto.id} {...produto}/>))
                }
            </div>

            <div className={styles.promocoes}>
                {/* Promocoes aqui */}

            </div>


        </section>
    )
}
