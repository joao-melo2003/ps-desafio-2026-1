"use client";

import {createContext, useContext, useState, Dispatch, SetStateAction} from "react";

type CategoryContextType = {
    categoriaSelecionada: string | null;
    setCategoriaSelecionada: Dispatch<SetStateAction<string | null>>;

    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
};


const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string| null>(null);
    const [search, setSearch] = useState("");

    return (
        
        <CategoryContext.Provider 
            value={{categoriaSelecionada, setCategoriaSelecionada,search,setSearch}}>
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory() {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error();
    }
    return context;
}

