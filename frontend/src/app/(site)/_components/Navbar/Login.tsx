import styles from './Navbar.module.css'
import Image from 'next/image'



export default function(){
    return (
        <div className={styles.conteinertBotao}>
            <button className={styles.botao}>Login</button>
        </div>
    )
}