import { sportsItemType } from '@/types/sportsItem'
import styles from './Panel.module.css'

export default function ProductCardSale({name}: sportsItemType){
    return(
        
        <p className={styles.produtos}>{name}</p>
        
    )
}