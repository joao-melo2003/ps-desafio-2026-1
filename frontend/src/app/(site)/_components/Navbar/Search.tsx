"use client";

import styles from './Navbar.module.css'
import { useState } from 'react';
import { useCategory } from "./CategoryContext";

export default function Search(){

    const { search, setSearch } = useCategory();
    const [open, setOpen] = useState(false);

    function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            setSearch((e.target as HTMLInputElement).value);
            setOpen(false);
        }
    }

    function handleClick() {
        const input = document.getElementById("busca") as HTMLInputElement;
        setSearch(input.value);
    }

    function handleLupaClick() {
        if (window.innerWidth <= 600) setOpen(true); 
        else handleClick(); 
    }   

    function buscaMobile() {
        const input = document.getElementById("buscaMobile") as HTMLInputElement;
        setSearch(input.value);
        setOpen(false);
    }

    return(
        <>
            <div className={styles.conteinerBusca}>
                <input type='text' id='busca'className={styles.busca} placeholder="Pesquisar" defaultValue={search} onKeyDown={handleSearch}/>

                <div className={styles.lupa}>
                    <button onClick={handleLupaClick}>
                        <img src='/assets/images/Lupa.png' alt='Lupa'/>
                    </button>
                </div>
            </div>

            
            {open && (
                <div className={styles.overlay} onClick={() => setOpen(false)}>
                    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                        <input type="text"id="buscaMobile" placeholder="Pesquisar..."defaultValue={search} onKeyDown={handleSearch}/>

                        <button onClick={buscaMobile}>
                            <img src='/assets/images/Lupa.png' alt='Buscar'/>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}