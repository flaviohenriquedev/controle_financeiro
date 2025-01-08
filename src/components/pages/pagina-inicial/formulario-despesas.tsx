import {LineContent} from "@/components/layout/data-display/line-content/line-content";
import {Label} from "@/components/layout/data-input/label/label";
import {Input} from "@/components/layout/data-input/input/input";
import {InputMoeda} from "@/components/layout/data-input/input/input-moeda";
import {Button} from "@/components/layout/actions/buttons/buttons";
import {Despesa} from "@/class/Despesa";
import {FormEvent} from "react";
import {InputData} from "@/components/layout/data-input/input/input-data";

type Props = {
    despesa: Despesa;
    funcaoAdicionar: () => void
}

export function FormularioDespesas({despesa, funcaoAdicionar}: Props) {

    function onSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        funcaoAdicionar();
    }

    return (
        <form className={`flex flex-col`}
              onSubmit={(e) => onSubmitForm(e)}>
            <LineContent>

                <Label descricao={`Descrição`}>
                    <Input
                        entidade={despesa}
                        field={`descricao`}/>
                </Label>

                <Label descricao={`Valor`}>
                    <InputMoeda
                        entidade={despesa}
                        field={`valor`}/>
                </Label>

                <Button descricao={`Adicionar`}/>
            </LineContent>
        </form>
    )
}