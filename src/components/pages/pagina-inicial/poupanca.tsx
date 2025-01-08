'use client'

import {useContext} from "react";
import {ValoresContext} from "@/context/ValoresContext";
import {extrairNumeros, formatarMoedaBrasileira} from "@/functions/utils";

export function Poupanca() {

    const {valorPoupanca, setValorPoupanca} = useContext(ValoresContext);

    function handleChangeValue(e: string) {
        const valorFormatado = e && e.length > 0 ? extrairNumeros(e) : '0'
        setValorPoupanca(parseFloat(valorFormatado))
    }

    return (
        <div className={`flex flex-col bg-base-300 text-base-content`}>
            <div className={`flex justify-between items-center`}>
                <h1 className={`px-4 text-[25pt]`}>Poupança</h1>
            </div>
            <hr/>
            <div className={`flex justify-center text-[14pt] p-1`}>
                <input type={`text`}
                       placeholder={`R$ 0,00`}
                       className={`text-center w-full bg-base-300 outline-none`}
                       value={formatarMoedaBrasileira(valorPoupanca.toString())}
                       onChange={(e) => handleChangeValue(e.target.value)}/>
            </div>
        </div>
    )
}