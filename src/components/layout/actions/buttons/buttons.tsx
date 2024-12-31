'use client'

import {ButtonHTMLAttributes} from "react";

type Estilo = 'info' | 'success' | 'warning' | 'error';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    descricao: string
    estilo?: Estilo
    preencherLinha?: boolean
}

export function Button({descricao, estilo, preencherLinha = false}: Props) {

    const estiloBotao: string = estilo === 'info' ? 'btn-info'
        : estilo === 'success' ? 'btn-success'
            : estilo === 'warning' ? 'btn-warning'
                : estilo === 'error' ? 'btn-error' : 'btn-info';

    return (
        <button className={`btn btn-sm ${preencherLinha ? 'btn-block' : ''} ${estiloBotao}`}>{descricao}</button>
    )
}