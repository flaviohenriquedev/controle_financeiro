'use client'

import {InputHTMLAttributes, useEffect, useState} from "react";
import {extrairNumeros, mascaraMoeda} from "@/functions/utils";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {get, set} from "lodash";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    entidade: E;
    field: string;
}


export function InputMoeda({
                               type = "text",
                               entidade,
                               field,
                               placeholder,
                               ...rest
                           }: Props<any>) {

    const [valorInput, setValorInput] = useState<string>("");

    useEffect(() => {
        const valorInicial = get(entidade, field, "");
        setValorInput(mascaraMoeda(valorInicial));
    }, [entidade, field]);

    function onChangeValorInput(value: string) {
        const valorNumerico: number = parseFloat(extrairNumeros(value));
        setValorInput(mascaraMoeda(value));
        set(entidade, field, valorNumerico);
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={valorInput || ""}
            onChange={(e) => onChangeValorInput(e.target.value)}
            className={`input input-bordered input-sm rounded-sm w-full`}
            {...rest}
        />
    );
}