import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Logo(){

    return(
        <div className={styles.logo}>
            <Image src = '/assets/images/Logo.jpg' alt='Logo' width={110} height={75}/>
        </div>
    )
}