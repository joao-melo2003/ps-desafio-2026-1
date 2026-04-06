'use client'

import { api } from '@/services/api';
import { sportsItemType } from '@/types/sportsItem';
import { useState, useEffect } from 'react';
import styles from './Panel.module.css'
import ProductCardSale from './ProductCardSale'
import Image from 'next/image'

export default function Panel(){

    const [products, setProducts] = useState<sportsItemType[]>([]);
    const ITENS_MAX = 1;
    const [paginaAtual, setPaginaAtual] = useState(0);

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


    const inicio = paginaAtual * ITENS_MAX;
    const fim = inicio + ITENS_MAX;

    const produtosPagina = products.slice(inicio, fim);

    
    return(
        <section className={styles.painelGeral}>

            <div className={styles.slider}>


                
            </div>
            <div className={styles.listaProdutos}>
     

                <div className={styles.listaProdutosInterna}>
                    {
                        produtosPagina.map((produto) => (<ProductCardSale key={produto.id} {...produto}/>))
                
                    }
                    
                </div>
                
                <div className={styles.setaEsquerda} hidden={paginaAtual === 0}>
                    <button className={styles.botaoSeta} onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 0))}>
                        <Image src = '/assets/images/seta.png' alt='Logo' width={20} height={75} className={styles.setaImagemEsquerda}/>
                    </button>
                </div>

                <div className={styles.setaDireita} hidden={(paginaAtual + 1) * ITENS_MAX >= products.length}>
                    <button className={styles.botaoSeta} onClick={() => setPaginaAtual((prev) => (prev + 1) * ITENS_MAX < products.length ? prev + 1 : prev)}>
                        <Image src = '/assets/images/seta.png' alt='Logo' width={20} height={75} className={styles.setaImagemDireita}/>
                    </button>
                </div>
                    
            </div>

            
        </section>
    )
}

