import styles from './Sale.module.css';
import { sportsItemType } from '@/types/sportsItem';

export default function ProductCard({name,preco,imagem, category}: sportsItemType){
    return(
        <div className={styles.produto}>
            <img src={imagem} alt={name} />
            <p>{name}</p>
            <span>R$ {preco}</span>
            <br></br>
            <span>{category.name}</span>
        </div>
    )
}

/*
id: string;
name: string;
preco: number;
ano: string;
imagem: string;
categoria_id: string;
quantidade: number
*/


