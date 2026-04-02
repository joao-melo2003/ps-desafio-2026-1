import styles from './Navbar.module.css'
import Logo from './Logo'
import Search from './Search'
import Categories from './Categories'
import Login from './Login'

export default function Navbar(){

    return(
        <nav className={styles.nav}>
            <Logo/>
            <Search/>
            <Categories/>
            <Login/>
        </nav>
    )
}