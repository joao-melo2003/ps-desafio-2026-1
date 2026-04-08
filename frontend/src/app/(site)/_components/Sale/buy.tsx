'use server'; 

import { api } from "@/services/api";

export async function comprarProdutoAction(id: string) {                    
  
  try {
    const {response} = await api('PUT', `/products/${id}/buy`);

    if(!response) return { success: false};
    
    return { success: true };

  }catch (e) {
    console.error(e);
    return { success: false}
  }
}
