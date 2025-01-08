'use client'

import {InputHTMLAttributes, useEffect, useState} from "react";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {get, set} from "lodash";
import {NumericFormat} from "react-number-format";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    entidade: E;
    field: string;
}

export function InputMoeda({
                               entidade,
                               field,
                               placeholder
                           }: Props<any>) {

    const [value, setValue] = useState('')

    useEffect(() => {
        const valorInicial = get(entidade, field, "") === 0
            ? ""
            : get(entidade, field, "")
        setValue(valorInicial)
    }, [entidade, field]);

    function setValorEntidade(valor: string) {
        const valorNumerico = parseFloat(valor);
        set(entidade, field, valorNumerico)
    }

    return (
        <NumericFormat
            placeholder={placeholder}
            value={value}
            onValueChange={(values) => {
                setValue(values.value);
                setValorEntidade(values.value)
            }}
            className={`input input-bordered input-sm rounded-sm w-full`}
            allowLeadingZeros={false}
            allowNegative={false}
            decimalScale={2}
            fixedDecimalScale={true}
            decimalSeparator=','
            allowedDecimalSeparators={['.']}
            prefix='R$ '
            thousandSeparator='.'
            isAllowed={(values) => {
                if (values.value.length > 9) return false;
                return true;
            }}
        />
    )
}