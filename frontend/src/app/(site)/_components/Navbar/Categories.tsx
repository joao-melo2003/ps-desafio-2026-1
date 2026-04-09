"use client"

import { api } from '@/services/api';
import { categoryType } from '@/types/category';
import { useState, useEffect } from 'react';
import CategoriesCard from './CategoriesCard';
import styles from './Navbar.module.css'

import { useCategory } from "./CategoryContext";

export default function Categories(){

    const { setCategoriaSelecionada } = useCategory();

    const [open, setOpen] = useState(false);

    const [category, setProducts] = useState<categoryType[]>([]);

    function filtroCategoria() {
        if (window.innerWidth <= 510) setOpen(true);
    }   
    
    useEffect(()=>{
        async function getCategory(){
            const {response, error} = await api('GET', '/category');

            if(response){
                setProducts(response as categoryType[]);
            }else{
                console.error(error?.message);
            }
        }

        getCategory();
    }, [])

    const categoriasOrdenadas = [...category].sort((k, i) => k.name.localeCompare(i.name));

    return(
        <div className={styles.barraCategorias}>
            <div className={styles.conteinerTitulo}>
                <h1 className={styles.tituloCategorias}>Categorias</h1>
            </div>
            
            <div className={styles.listaNomeCategorias}>
                {
                    categoriasOrdenadas.map((categoria) => (
                        <CategoriesCard key={categoria.id} {...categoria} onClick={() => setCategoriaSelecionada(prev => prev === categoria.id ? null : categoria.id)}/>
                    ))
                }
            </div>
            
           <div className={styles.filtro}>
                <button onClick={filtroCategoria}>
                    <img src='/assets/images/filtro.png' alt="Filtro"/>
                </button>
            </div>

            {open && (
                <div className={styles.overlayCategoria}>
                    <div className={styles.popupCategorias}>

                        <h2>Categorias</h2>

                        <div className={styles.listaPopup}>
                            {categoriasOrdenadas.map((categoria) => (
                                <CategoriesCard key={categoria.id}{...categoria} onClick={() => {setCategoriaSelecionada(prev => prev === categoria.id ? null : categoria.id);
                                        setOpen(false);
                                }}/>
                            ))}
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}
