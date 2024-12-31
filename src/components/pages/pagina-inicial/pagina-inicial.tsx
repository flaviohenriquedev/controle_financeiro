'use client'

import {Modal} from "@/components/layout/data-display/modal/modal";
import {Receitas} from "@/components/pages/pagina-inicial/receitas";
import {Despesas} from "@/components/pages/pagina-inicial/despesas";
import {Resultados} from "@/components/pages/pagina-inicial/resultados";
import {FormularioDespesas} from "@/components/pages/pagina-inicial/formulario-despesas";
import {FormularioReceitas} from "@/components/pages/pagina-inicial/formulario-receitas";
import {Receita} from "@/class/Receita";
import {useContext, useState} from "react";
import {closeModal, openModal} from "@/functions/utils";
import {Despesa} from "@/class/Despesa";
import {ReceitasContext} from "@/context/ReceitasContext";
import {DespesasContext} from "@/context/DespesasContext";

export function PaginaInicial() {

    const {listaReceitas, receita, setReceita, adicionarReceita} = useContext(ReceitasContext)
    const {listaDespesas, despesa, setDespesa, adicionarDespesa} = useContext(DespesasContext)


    function handleAdicionarReceita() {
        adicionarReceita();
        closeModal(`my_modal_3`);
    }

    function handleAdicionarDespesa() {
        adicionarDespesa();
        closeModal(`my_modal_4`);
    }

    function handleOpenModal(idModal: string, callBack?: () => void) {
        openModal(idModal)
        callBack && callBack();
    }

    return (
        <>
            <div className={`flex gap-2`}>
                <Receitas receitas={listaReceitas}
                          handleOpenModal={() => handleOpenModal(`my_modal_3`, () => setReceita(new Receita()))}/>
                <Despesas despesas={listaDespesas}
                          handleOpenModal={() => handleOpenModal(`my_modal_4`, () => setDespesa(new Despesa()))}/>
                <Resultados />
            </div>

            <Modal idModal={`my_modal_3`}
                   titulo={`Cadastro de Receitas`}>
                <FormularioReceitas
                    funcaoAdicionar={() => handleAdicionarReceita()}
                    receita={receita}/>
            </Modal>

            <Modal idModal={`my_modal_4`}
                   titulo={`Cadastro de Despesas`}>
                <FormularioDespesas funcaoAdicionar={() => handleAdicionarDespesa()}
                                    despesa={despesa}/>
            </Modal>
        </>
    )
}