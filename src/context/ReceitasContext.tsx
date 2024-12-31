'use client'

import {createContext, ReactNode, useEffect, useState} from "react";
import {Receita} from "@/class/Receita";
import {generateRandomId} from "@/functions/utils";

const apiReceitas: Receita[] = []

type Props = {
    listaReceitas: Receita[]
    setListaReceitas: (listaReceitas: Receita[]) => void;
    receita: Receita;
    setReceita: (receita: Receita) => void;
    adicionarReceita: () => void;
    excluirReceita: (receita: Receita) => void;
    valorTotal: number
}

export const ReceitasContext = createContext<Props>({
    listaReceitas: [],
    setListaReceitas: () => {
    },
    receita: new Receita(),
    setReceita: () => {
    },
    adicionarReceita: () => {
    },
    excluirReceita: () => {
    },
    valorTotal: 0,
})

export function ReceitasContextProvider({children}: { children: ReactNode }) {

    const [listaReceitas, setListaReceitas] = useState<Receita[]>(apiReceitas);
    const [receita, setReceita] = useState<Receita>(new Receita());
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const valorTotal = somarValorTotalReceita(listaReceitas);
        setValorTotal(valorTotal);
    }, [listaReceitas]);

    function somarValorTotalReceita(receitas: Receita[]): number {
        let total: number = 0;

        receitas.map(receita => (
            total += receita.valor
        ))

        return total;
    }

    function adicionarReceita() {
        const novaReceita = {...receita, id: generateRandomId()};
        setListaReceitas([...listaReceitas, novaReceita]);
    }

    function excluirReceita(receita: Receita) {
        setListaReceitas(prevState => prevState.filter(r => r.id !== receita.id));
    }

    return (
        <ReceitasContext.Provider value={{
            listaReceitas, setListaReceitas, receita, setReceita, adicionarReceita, excluirReceita, valorTotal
        }}>
            {children}
        </ReceitasContext.Provider>
    );
}