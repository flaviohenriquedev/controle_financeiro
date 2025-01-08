import {EntidadePadrao} from "@/class/EntidadePadrao";

export class Despesa extends EntidadePadrao {
    constructor(
        public descricao: string = String(),
        public valor: number = Number(),
        public dataVencimento = Date()
    ) {
        super();
    }
}