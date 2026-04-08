import styles from './Navbar.module.css'

export default function Logo(){

    return(
        <div className={styles.logo}>
            <img src = "/assets/images/Logo.jpg" alt='logo'/>
        </div>
    )
}