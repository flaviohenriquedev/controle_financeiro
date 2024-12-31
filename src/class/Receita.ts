import {EntidadePadrao} from "@/class/EntidadePadrao";

export class Receita extends EntidadePadrao{
    constructor(
        public descricao: string = String(),
        public valor: number = Number(),
    ) {
        super();
    }
}