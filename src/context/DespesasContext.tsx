'use client'

import {createContext, ReactNode, useEffect, useState} from "react";
import {Despesa} from "@/class/Despesa";
import {deleteDespesa, fetchDespesas, insertDespesa} from "@/api/despesas";

type Props = {
    listaDespesas: Despesa[];
    setListaDespesas: (listaDespesas: Despesa[]) => void;
    despesa: Despesa;
    setDespesa: (despesa: Despesa) => void;
    adicionarDespesa: () => void;
    excluirDespesa: (despesa: Despesa) => void;
    valorTotal: number;
};

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
});

export function DespesasContextProvider({children}: { children: ReactNode }) {
    const [listaDespesas, setListaDespesas] = useState<Despesa[]>([]);
    const [despesa, setDespesa] = useState<Despesa>(new Despesa());
    const [valorTotal, setValorTotal] = useState<number>(0);

    useEffect(() => {
        handleFetchDespesas()
    }, []);

    useEffect(() => {
        const valorTotal = somarValorTotalDespesa(listaDespesas);
        setValorTotal(valorTotal);
    }, [listaDespesas]);

    function somarValorTotalDespesa(despesas: Despesa[]): number {
        let total: number = 0;
        despesas && despesas.map(despesa => {
            total += despesa.valor ?? 0;
        })
        return total;
    }

    function handleFetchDespesas() {
        fetchDespesas().then(result => {
            setListaDespesas(result);
        });
    }

    function adicionarDespesa() {
        insertDespesa(despesa).then(_ => {
            handleFetchDespesas();
        })
    }

    function excluirDespesa(despesa: Despesa) {
        deleteDespesa(despesa.id).then(_ => handleFetchDespesas());
    }

    return (
        <DespesasContext.Provider value={{
            listaDespesas,
            setListaDespesas,
            despesa,
            setDespesa,
            adicionarDespesa,
            excluirDespesa,
            valorTotal
        }}>
            {children}
        </DespesasContext.Provider>
    );
}
