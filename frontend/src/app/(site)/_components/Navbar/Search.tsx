import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Search(){

    return(
        <div className={styles.conteinerBusca}>
            <input type='text' id='busca' className={styles.busca} placeholder="Pesquisar"/>
            <div className={styles.lupa}>
                <Image src = '/assets/images/Lupa.png' alt='Logo' width={20} height={75}/>
                <button disabled></button>
            </div>
        </div>
    )
}