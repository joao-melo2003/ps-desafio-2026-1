'use client'

import styles from './Sale.module.css';
import ProductCard from './ProductCard';
import { sportsItemType } from '@/types/sportsItem';
import { useEffect, useState } from 'react';
import { api } from '@/services/api'
import { useCategory } from "@/app/(site)/_components/Navbar/CategoryContext";
import {comprarProdutoAction} from "./buy"

export default function Sale(){

    const {categoriaSelecionada, search } = useCategory();

    const [products, setProducts] = useState<sportsItemType[]>([]);

    const ITENS_MAX = 6;
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


    async function comprarProduto(id: string) {
        const result = await comprarProdutoAction(id);

        if (!result.success) {
            console.error("Erro na compra") 
            return;
        }

        setProducts(prev => prev.map(prod => prod.id === id ? { ...prod, quantidade: prod.quantidade - 1 } : prod));
    }
    

    useEffect(() => {setPaginaAtual(0);

    }, [categoriaSelecionada, search]);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [paginaAtual]);


    
    const produtosFiltrados = products.filter(p => {
        const matchCategoria = categoriaSelecionada? p.category.id === categoriaSelecionada: true;

        const matchNome = search ? p.name.toLowerCase().includes(search.toLowerCase()): true;

        return matchCategoria && matchNome;
    });

    const numeroPaginas = Math.ceil(produtosFiltrados.length / ITENS_MAX);

    const inicio = paginaAtual * ITENS_MAX;
    const fim = inicio + ITENS_MAX;

    const produtosPagina = produtosFiltrados.slice(inicio, fim);


    return(
        <section className={styles.sale}>
            <div className={styles.vitrine}>

                {
                    produtosPagina.map((produto) => ( <ProductCard artigoEsportivoCompra={comprarProduto} key={produto.id} {...produto}/>))
                }

            </div>

            <div className={styles.listPage}>
                {
                    Array.from({ length: numeroPaginas }).map((_,index) => (
                    <button key={index} onClick={() => setPaginaAtual(index)} className={styles.pages}>{index + 1}</button>))
                }
            </div>

        </section>
    )
}


