import { useCategory } from '../Navbar/CategoryContext';
import styles from './Panel.module.css'

type Props = {
    nome: string;
    compraPainel: () => void;
}

export default function ProductCardSale({nome,compraPainel}:Props){

    const { search } = useCategory();
    return(
        
        <div onClick={compraPainel} className={`${styles.produtoFiltro} ${search === nome ? styles.ativo : ""}`}>
            <p className={styles.produtos}>{nome}</p>
        </div>
    )
}