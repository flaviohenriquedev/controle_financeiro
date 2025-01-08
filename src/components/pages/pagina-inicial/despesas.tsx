import {formatarMoedaBrasileira} from "@/functions/utils";
import {Despesa} from "@/class/Despesa";
import {useContext} from "react";
import {icones} from "@/components/layout/icones";
import {DespesasContext} from "@/context/DespesasContext";
import {FieldTabela} from "@/types";
import {TipoDados} from "@/enums";
import {Table} from "@/components/layout/data-display/table/table";

type Props = {
    despesas: Despesa[];
    handleOpenModal: () => void;
}

const fieldsDespesas: FieldTabela[] = [
    {
        titulo: 'Descrição',
        field: 'descricao',
    },
    {
        titulo: 'Valor',
        field: 'valor',
        tipoDados: TipoDados.MOEDA,
    }
]

export function Despesas({despesas, handleOpenModal}: Props) {

    const {valorTotal, excluirDespesa} = useContext(DespesasContext);

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
                    <h2 className={`text-[14pt]`}>{formatarMoedaBrasileira(valorTotal.toString())}</h2>
                </div>
            </div>

            <Table lista={despesas}
                   fields={fieldsDespesas}
                   funcaoExcluir={excluirDespesa}/>
        </div>
    )
}