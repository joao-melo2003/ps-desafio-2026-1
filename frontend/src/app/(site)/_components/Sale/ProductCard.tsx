import styles from './Sale.module.css';
import { sportsItemType } from '@/types/sportsItem';

type Props = sportsItemType & {
    artigoEsportivoCompra: (id: string) => void;
};

export default function ProductCard(produto: Props){

    return(
       <div className={styles.produto}>
            <div className={styles.imagemContainer}>
                <img src={produto.imagem} alt={produto.name} className={styles.imagem}/>

                <span className={styles.badge}>
                    {produto.quantidade}
                </span>
            </div>

            <div className={styles.infoProduto}>
                <p className={styles.titulo}>{produto.name}</p>
                <p className={styles.preco}>R$ {produto.preco}</p>
                <p className={styles.categoria}>{produto.category.name}</p>

                <button className={`${styles.botaoCompra} ${produto.quantidade <= 0 ? styles.esgotado : ''}`} disabled={produto.quantidade <= 0} onClick={()=>produto.artigoEsportivoCompra(produto.id)}>
                    {produto.quantidade > 0 ? 'Comprar' : 'Indisponível'}
                </button>
            </div>

        </div>
    )
}