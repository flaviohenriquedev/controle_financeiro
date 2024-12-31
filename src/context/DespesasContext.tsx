'use client'

import {createContext, ReactNode, useEffect, useState} from "react";
import {generateRandomId} from "@/functions/utils";
import {Despesa} from "@/class/Despesa";

const apiDespesas: Despesa[] = [
    {
        id: 1,
        descricao: 'Aluguel',
        valor: 760
    },
    {
        id: 2,
        descricao: 'Caixa',
        valor: 1000
    },
    {
        id: 3,
        descricao: 'NU PF',
        valor: 2000
    }, {
        id: 4,
        descricao: 'NU PJ',
        valor: 3399
    }, {
        id: 5,
        descricao: 'Neon',
        valor: 4400
    },
]

type Props = {
    listaDespesas: Despesa[]
    setListaDespesas: (listaDespesas: Despesa[]) => void
    despesa: Despesa
    setDespesa: (Despesa: Despesa) => void
    adicionarDespesa: () => void
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

    return (
        <DespesasContext.Provider value={{
            listaDespesas, setListaDespesas, despesa, setDespesa, adicionarDespesa, valorTotal
        }}>
            {children}
        </DespesasContext.Provider>
    );
}