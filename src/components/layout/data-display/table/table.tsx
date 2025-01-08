import {FieldTabela} from "@/types";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Input} from "@/components/layout/data-input/input/input";
import {icones} from "@/components/layout/icones";
import {TipoDados} from "@/enums";
import {formatarMoedaBrasileira, getValorEmString} from "@/functions/utils";
import {get} from "lodash";
import {useEffect} from "react";

interface Props<E extends EntidadePadrao> {
    lista: E[]
    fields: FieldTabela[]
    enumerar?: boolean
    modeloTabela?: 1 | 2
    funcaoEditar?: (entidade: E) => void
    funcaoExcluir?: (entidade: E) => void
    selecionarComDuploClique?: (entidade: E) => void
}

export function Table({
                          lista,
                          fields,
                          enumerar = false,
                          modeloTabela = 1,
                          funcaoEditar,
                          funcaoExcluir,
                          selecionarComDuploClique
                      }: Props<any>) {

    useEffect(() => {
        renderLinhas()
    }, [lista]);

    function renderHead() {
        return fields.map((field) => (
            <th key={field.field}>{field.titulo}</th>
        ));
    }

    function renderLinhas() {
        if (lista && lista.length > 0) {
            return lista.map((item, index) => (
                <tr key={index}
                    className={`
                                ${item.destacar ? 'bg-success text-base-100' : 'bg-base-200'}
                                ${selecionarComDuploClique ? 'hover:cursor-pointer hover:bg-base-300' : ''}`}
                    onDoubleClick={() => selecionarComDuploClique ? selecionarComDuploClique(item) : null}>

                    {enumerar && <th>{(index + 1)}</th>}

                    {fields.map(field => (
                        field.editavel
                            ? (
                                <td key={field.field}>
                                    <Input entidade={item}
                                           className={`w-16 text-base-content`}
                                           field={field.field}/>
                                </td>
                            )
                            : <td key={field.field}>{
                                field.tipoDados === TipoDados.MOEDA
                                    ? formatarMoedaBrasileira(getValorEmString(get(item, field.field)))
                                    : get(item, field.field)
                            }</td>
                    ))}

                    {funcaoEditar && <td className={`hover:cursor-pointer`}
                                         onClick={() => funcaoEditar ? funcaoEditar(item) : null}>{icones.editar({})}</td>}

                    {funcaoExcluir && <td className={`hover:cursor-pointer`}
                                          onClick={() => funcaoExcluir ? funcaoExcluir(item) : null}>{icones.excluir({})}</td>}
                </tr>
            ))
        }
    }

    return (
        <div className="w-full overflow-x-auto">
            <table className={`table ${modeloTabela === 2 && 'table-xs table-pin-rows table-pin-cols'}`}>
                <thead>
                <tr>
                    {enumerar && <th></th>}
                    {renderHead()}
                </tr>
                </thead>
                <tbody>
                {renderLinhas()}
                </tbody>
            </table>
        </div>
    )
}