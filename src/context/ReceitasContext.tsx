'use client'

import {createContext, ReactNode, useEffect, useState} from "react";
import {Receita} from "@/class/Receita";
import {deleteReceita, fetchReceitas, insertReceita, updateReceita} from "@/api/receitas";

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
        handleFetchReceitas()
    }, []);

    useEffect(() => {
        const valorTotal = somarValorTotalReceita(listaReceitas);
        setValorTotal(valorTotal);
    }, [listaReceitas]);

    function somarValorTotalReceita(receitas: Receita[]): number {
        let total: number = 0;

        receitas && receitas.map(receita => (
            total += receita.valor
        ))

        return total;
    }

    function handleFetchReceitas() {
        fetchReceitas().then(result => {
            setListaReceitas(result);
        });
    }

    function adicionarReceita() {
        if (receita.id === 0) {
            insertReceita(receita).then(_ => {
                handleFetchReceitas();
            })
        } else (
            updateReceita(receita).then(_ => {
                handleFetchReceitas();
            })
        )
    }

    function excluirReceita(receita: Receita) {
        deleteReceita(receita.id).then(_ => handleFetchReceitas());
    }

    return (
        <ReceitasContext.Provider value={{
            listaReceitas, setListaReceitas, receita, setReceita, adicionarReceita, excluirReceita, valorTotal
        }}>
            {children}
        </ReceitasContext.Provider>
    );
}