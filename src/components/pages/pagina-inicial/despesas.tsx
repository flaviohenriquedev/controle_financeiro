import {mascaraMoeda} from "@/functions/utils";
import {Despesa} from "@/class/Despesa";
import {useContext} from "react";
import {icones} from "@/components/layout/icones";
import {DespesasContext} from "@/context/DespesasContext";

type Props = {
    despesas: Despesa[];
    handleOpenModal: () => void;
}

export function Despesas({despesas, handleOpenModal}: Props) {

    const {valorTotal} = useContext(DespesasContext);

    const renderDespesas = () => {
        return despesas.map((despesa) => (
            <tr key={(despesa.id)}>
                <td>{despesa.descricao}</td>
                <td>{mascaraMoeda(despesa.valor.toString())}</td>
            </tr>
        ));
    };

    return (
        <div className={`flex flex-col w-full`}>
            <div className={`flex flex-col bg-secondary text-secondary-content`}>
                <div className={`flex justify-between items-center`}>
                    <h1 className={`px-4 text-[25pt]`}>Despesas</h1>
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
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderDespesas()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}