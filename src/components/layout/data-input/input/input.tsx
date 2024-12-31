'use client'

import {InputHTMLAttributes, useEffect, useState} from "react";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {get, set} from "lodash";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    entidade: E;
    field: string;
}

export function Input({
                          type = "text",
                          entidade,
                          field,
                          placeholder,
                          ...rest
                      }: Props<any>) {

    const [valorInput, setValorInput] = useState<string>("");

    useEffect(() => {
        const valorInicial = get(entidade, field, "");
        setValorInput(valorInicial);
    }, [entidade, field]);

    function onChangeValorInput(value: string) {
        setValorInput(value);
        set(entidade, field, value);
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
