import styles from './Navbar.module.css'
import Link from "next/link";

export default function(){
    return (
        <div className={styles.conteinerBotao}>
            <Link href="/admin">
                <button className={styles.botao} >Login</button>
            </Link>
            
        </div>
    )
}