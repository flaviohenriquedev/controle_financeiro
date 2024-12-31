'use client'

import {createContext, ReactNode, useEffect, useState} from "react";
import {generateRandomId} from "@/functions/utils";
import {Despesa} from "@/class/Despesa";
import {Receita} from "@/class/Receita";

const apiDespesas: Despesa[] = []

type Props = {
    listaDespesas: Despesa[]
    setListaDespesas: (listaDespesas: Despesa[]) => void
    despesa: Despesa
    setDespesa: (Despesa: Despesa) => void
    adicionarDespesa: () => void
    excluirDespesa: (receita: Receita) => void
    valorTotal: number
}

export const DespesasContext = createContext<Props>({
    listaDespesas: [],
    setListaDespesas: () => {
    },
    despesa: new Despesa(),
    setDespesa: () => {
    },
    adicionarDespesa: () => {
    },
    excluirDespesa: () => {
    },
    valorTotal: 0,
})

export function DespesasContextProvider({children}: { children: ReactNode }) {

    const [listaDespesas, setListaDespesas] = useState<Despesa[]>(apiDespesas);
    const [despesa, setDespesa] = useState<Despesa>(new Despesa());
    const [valorTotal, setValorTotal] = useState<number>(0);

    useEffect(() => {
        const valorTotal = somarValorTotalDespesa(listaDespesas);
        setValorTotal(valorTotal);
    }, [listaDespesas]);

    function somarValorTotalDespesa(despesas: Despesa[]): number {
        let total: number = 0;

        despesas.map(despesa => (
            total += despesa.valor
        ))

        return total;
    }

    function adicionarDespesa() {
        const novaDespesa = {...despesa, id: generateRandomId()};
        setListaDespesas([...listaDespesas, novaDespesa]);
    }

    function excluirDespesa(despesa: Despesa) {
        setListaDespesas(prevState => prevState.filter(r => r.id !== despesa.id));
    }

    return (
        <DespesasContext.Provider value={{
            listaDespesas, setListaDespesas, despesa, setDespesa, adicionarDespesa, excluirDespesa, valorTotal
        }}>
            {children}
        </DespesasContext.Provider>
    );
}