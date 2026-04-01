import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar(){
    //Colocar botão imagem
    return(
        <nav className={styles.nav}>
            <Image src = '/assets/images/Logo.jpg' alt='Logo' width={110} height={75} className={styles.logo}/>
            <div className={styles.contraste}></div>
            <input type='text' id='busca' className={styles.busca} placeholder="Pesquisar"/>
            <Image src = '/assets/images/Lupa.png' alt='Logo' width={20} height={75} className={styles.lupa}/>
            <button disabled></button>
            

        

        </nav>
    )
}
