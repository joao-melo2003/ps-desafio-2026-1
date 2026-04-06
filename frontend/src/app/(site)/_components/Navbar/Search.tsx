"use client";

import styles from './Navbar.module.css'
import Image from 'next/image'
import { useCategory } from "./CategoryContext";

export default function Search(){

    const { search, setSearch } = useCategory();

    function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            setSearch((e.target as HTMLInputElement).value);
        }
    }

    function handleClick() {
        const input = document.getElementById("busca") as HTMLInputElement;
        setSearch(input.value);
    }

    return(
        <div className={styles.conteinerBusca}>
            <input type='text' id='busca'className={styles.busca} placeholder="Pesquisar" defaultValue={search}onKeyDown={handleSearch}/>

            <div className={styles.lupa}>
                <button onClick={handleClick}>
                    <Image src = '/assets/images/Lupa.png' alt='Logo' width={20} height={75}/>
                </button>
            </div>
        </div>
    )
}

