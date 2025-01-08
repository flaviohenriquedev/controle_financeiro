'use client';

import React, {createContext, useContext, useEffect, useState} from "react";
import {ReceitasContext} from "@/context/ReceitasContext";
import {DespesasContext} from "@/context/DespesasContext";

type Props = {
    valorPoupanca: number;
    setValorPoupanca: (valor: number) => void;
    valorSaldo: number;
    valorSaldoPoupanca: number;
};

export const ValoresContext = createContext<Props>({
    valorPoupanca: 0,
    setValorPoupanca: () => {
    },
    valorSaldo: 0,
    valorSaldoPoupanca: 0
});

export const ValoresContextProvider = ({
                                           children,
                                       }: {
    children: React.ReactNode;
}) => {

    const [valorSaldo, setValorSaldo] = useState<number>(0)
    const [valorPoupanca, setValorPoupanca] = useState<number>(0)
    const [valorSaldoPoupanca, setValorSaldoPoupanca] = useState<number>(0)

    const {valorTotal: valorTotalReceitas} = useContext(ReceitasContext);
    const {valorTotal: valorTotalDespesas} = useContext(DespesasContext);

    useEffect(() => {
        setValorSaldo(valorTotalReceitas - valorTotalDespesas);
        setValorSaldoPoupanca(!isNaN(valorPoupanca) ? valorPoupanca + valorSaldo : valorSaldo);
    }, [valorTotalReceitas, valorTotalDespesas]);

    useEffect(() => {
        setValorSaldoPoupanca(!isNaN(valorPoupanca) ? valorPoupanca + valorSaldo : valorSaldo);
    }, [valorPoupanca, valorSaldo]);

    return (
        <ValoresContext.Provider
            value={{valorPoupanca, setValorPoupanca, valorSaldo, valorSaldoPoupanca}}
        >
            {children}
        </ValoresContext.Provider>
    );
};