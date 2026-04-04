import { categoryType } from './category';


export type sportsItemType = {
    id: string;
    name: string;
    preco: number;
    ano: string;
    imagem: string;
    categoria_id: string;
    quantidade: number,
    category: categoryType;
}
