import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Search(){

    return(
        <>
            <input type='text' id='busca' className={styles.busca} placeholder="Pesquisar"/>
            <Image src = '/assets/images/Lupa.png' alt='Logo' width={20} height={75} className={styles.lupa}/>
            <button disabled></button>
        </>
    )
}