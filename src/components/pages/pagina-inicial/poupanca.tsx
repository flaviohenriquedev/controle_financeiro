'use client'

import {useContext, useState} from "react";
import {ValoresContext} from "@/context/ValoresContext";
import {NumericFormat} from "react-number-format";

export function Poupanca() {

    const [value, setValue] = useState('')
    const {setValorPoupanca} = useContext(ValoresContext);

    return (
        <div className={`flex flex-col bg-base-300 text-base-content`}>
            <div className={`flex justify-between items-center`}>
                <h1 className={`px-4 text-[25pt]`}>Poupança</h1>
            </div>
            <hr/>
            <div className={`flex justify-center text-[14pt] p-1`}>
                <NumericFormat
                    value={value}
                    onValueChange={(values) => {
                        setValue(values.value);
                        setValorPoupanca(parseFloat(values.value))
                    }}
                    className={`text-center w-full bg-base-300 outline-none`}
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
            </div>
        </div>
    )
}