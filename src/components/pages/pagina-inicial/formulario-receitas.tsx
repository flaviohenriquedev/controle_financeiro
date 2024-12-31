import {LineContent} from "@/components/layout/data-display/line-content/line-content";
import {Input} from "@/components/layout/data-input/input/input";
import {Label} from "@/components/layout/data-input/label/label";
import {Button} from "@/components/layout/actions/buttons/buttons";
import {InputMoeda} from "@/components/layout/data-input/input/input-moeda";
import {Receita} from "@/class/Receita";
import {FormEvent} from "react";

type Props = {
    receita: Receita;
    funcaoAdicionar: () => void
}

export function FormularioReceitas({receita, funcaoAdicionar}: Props) {

    function onSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        funcaoAdicionar();
    }

    return (
        <form className={`flex flex-col`} onSubmit={(e) => onSubmitForm(e)}>
            <LineContent>

                <Label descricao={`Descrição`}>
                    <Input
                        entidade={receita}
                        field={`descricao`}/>
                </Label>

                <Label descricao={`Valor`}>
                    <InputMoeda
                        entidade={receita}
                        field={`valor`}/>
                </Label>

                <Button descricao={`Adicionar`}/>
            </LineContent>
        </form>
    )
}