import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Logo(){

    return(
        <div>
            <Image src = '/assets/images/Logo.jpg' alt='Logo' width={110} height={75} className={styles.logo}/>
        </div>
    )
}