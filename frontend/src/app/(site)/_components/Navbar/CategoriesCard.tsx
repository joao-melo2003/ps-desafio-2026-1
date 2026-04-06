import styles from './Navbar.module.css'
import { useCategory } from "./CategoryContext";


export default function CategoriesCard({ id, name, onClick }: any){
    const { categoriaSelecionada } = useCategory();

    return(
        <button onClick={onClick} className={`${styles.nomeCategorias} ${categoriaSelecionada === id ? styles.ativa : ""}`}> {name}</button>
    )
}

