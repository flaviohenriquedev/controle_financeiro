import {mascaraMoeda} from "@/functions/utils";
import {useContext} from "react";
import {ValoresContext} from "@/context/ValoresContext";
import {Poupanca} from "@/components/pages/pagina-inicial/poupanca";

export function Resultados() {

    const {valorSaldo, valorSaldoPoupanca} = useContext(ValoresContext);

    return (
        <div className={`flex flex-col w-full gap-4`}>
            <Poupanca />
            <div className={`flex items-center justify-between bg-accent text-accent-content py-2 px-4`}>
                <div className={`flex p-1`}>
                    <h1 className={`text-[20pt]`}>Saldo</h1>
                </div>
                <div className={`flex p-1`}>
                    <h2 className={`text-[20pt]`}>{mascaraMoeda(valorSaldo.toString())}</h2>
                </div>
            </div>

            <div className={`flex items-center justify-between bg-info text-info-content py-2 px-4`}>
                <div className={`flex justify-center p-1`}>
                    <h1 className={`text-[20pt]`}>Saldo + Poupança</h1>
                </div>
                <div className={`flex justify-center p-1`}>
                    <h2 className={`text-[20pt]`}>{mascaraMoeda(valorSaldoPoupanca.toString())}</h2>
                </div>
            </div>
        </div>
    )
}