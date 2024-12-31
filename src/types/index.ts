import {TipoDados} from "@/enums";

export type FieldTabela = {
    titulo: string;
    field: string;
    editavel?: boolean;
    tipoDados?: TipoDados;
}
