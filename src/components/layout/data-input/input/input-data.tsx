import {EntidadePadrao} from "@/class/EntidadePadrao";
import {InputHTMLAttributes, useEffect, useState} from "react";
import {get, set} from "lodash";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    entidade: E;
    field: string;
}

export function InputData({
                              type = "date",
                              entidade,
                              field,
                              placeholder,
                              ...rest
                          }: Props<any>) {

    const [valorInputData, setValorInputData] = useState<string>("");

    useEffect(() => {
        const valorInicial = get(entidade, field, "");
        if (valorInicial) {
            const dataFormatada = new Date(valorInicial).toISOString().split("T")[0];
            setValorInputData(dataFormatada);
        } else {
            setValorInputData(get(entidade, field, ""));
        }
    }, [entidade, field]);

    function onChangeValorInput(value: string) {
        setValorInputData(value);
        set(entidade, field, new Date(value));
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={valorInputData || ""}
            onChange={(e) => onChangeValorInput(e.target.value)}
            className={`input input-bordered input-sm rounded-sm w-full`}
            {...rest}
        />
    )
}