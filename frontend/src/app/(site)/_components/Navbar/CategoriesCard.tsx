import styles from './Navbar.module.css'
import { categoryType } from '@/types/category'


export default function CategoriesCard(categoria:categoryType){

    return(
        
        <p className={styles.nomeCategorias}>{categoria.name}</p>
    )
}