import {mascaraMoeda} from "@/functions/utils";
import {Receita} from "@/class/Receita";
import {useContext, useEffect, useState} from "react";
import {icones} from "@/components/layout/icones";
import {ReceitasContext} from "@/context/ReceitasContext";

type Props = {
    receitas: Receita[];
    handleOpenModal: () => void;
}

export function Receitas({receitas, handleOpenModal}: Props) {

    const {valorTotal} = useContext(ReceitasContext)

    const renderReceitas = () => {
        return receitas.map((receita) => (
            <tr key={(receita.id)}>
                <td>{receita.descricao}</td>
                <td>{mascaraMoeda(receita.valor.toString())}</td>
            </tr>
        ));
    };

    return (
        <div className={`flex flex-col w-full`}>
            <div className={`flex flex-col bg-primary text-primary-content`}>
                <div className={`flex justify-between items-center`}>
                    <h1 className={`px-4 text-[25pt]`}>Receitas</h1>
                    <div
                        className={`flex items-center justify-center h-full aspect-square border-l hover:cursor-pointer`}
                        onClick={handleOpenModal}>
                        {icones.adicionar({size: 40})}
                    </div>
                </div>
                <hr/>
                <div className={`flex justify-center p-1`}>
                    <h2 className={`text-[14pt]`}>{mascaraMoeda(valorTotal.toString())}</h2>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderReceitas()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
