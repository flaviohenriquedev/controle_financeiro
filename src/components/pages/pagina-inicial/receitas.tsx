import {mascaraMoeda} from "@/functions/utils";
import {Receita} from "@/class/Receita";
import {useContext} from "react";
import {icones} from "@/components/layout/icones";
import {ReceitasContext} from "@/context/ReceitasContext";
import {FieldTabela} from "@/types";
import {Table} from "@/components/layout/data-display/table/table";
import {TipoDados} from "@/enums";

type Props = {
    receitas: Receita[];
    handleOpenModal: () => void;
}

const fieldsReceitas: FieldTabela[] = [
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

export function Receitas({receitas, handleOpenModal}: Props) {

    const {valorTotal, excluirReceita} = useContext(ReceitasContext)

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
            <Table lista={receitas}
                   fields={fieldsReceitas}
                   funcaoExcluir={excluirReceita}
            />
        </div>
    );
}
