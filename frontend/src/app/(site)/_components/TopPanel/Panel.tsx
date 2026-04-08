'use client'

import { api } from '@/services/api';
import { sportsItemType } from '@/types/sportsItem';
import { useState, useEffect } from 'react';
import styles from './Panel.module.css'
import ProductCardSale from './ProductCardSale'
import Image from 'next/image'
import { useCategory } from "@/app/(site)/_components/Navbar/CategoryContext";

export default function Panel(){

    const [products, setProducts] = useState<sportsItemType[]>([]);
    const ITENS_MAX = 8;
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

    const { setSearch } = useCategory();
    
    function filtroDireto(nome: string) {
        setSearch((prev) => prev === nome ? "" : nome);
    }

    
    return(
        <section className={styles.painelGeral}>

            <div className={styles.banner}>

                <img src="/assets/images/banner.jpg" alt="banner" className={styles.bannerImg}/>
                
            </div>

            <div className={styles.listaProdutos}>
     

                <div className={styles.listaProdutosInterna}>
                    {
                        produtosPagina.map((produto) => (<ProductCardSale nome={produto.name} compraPainel={()=>filtroDireto(produto.name)} key={produto.id}/>))
                    }
                    
                </div>

                {
                    paginaAtual > 0 && (
                        <div className={styles.setaEsquerda}>
                            <button className={styles.botaoSeta} onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 0))}>
                                <Image src='/assets/images/seta.png' alt='Voltar' width={30} height={30} className={styles.setaImagemEsquerda}/>
                            </button>
                        </div>
                    )
                }

               {
                    (paginaAtual + 1) * ITENS_MAX < products.length && (
                        <div className={styles.setaDireita} hidden={(paginaAtual + 1) * ITENS_MAX >= products.length}>
                            <button className={styles.botaoSeta} onClick={() => setPaginaAtual((prev) =>(prev + 1) * ITENS_MAX < products.length ? prev + 1 : prev)}>
                                <Image src='/assets/images/seta.png' alt='Avançar'  width={30} height={30} className={styles.setaImagemDireita}/>
                            </button>
                        </div>
                    )
               }
                    
            </div>

            
        </section>
    )
}