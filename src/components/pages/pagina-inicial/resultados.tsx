import {formatarMoedaBrasileira} from "@/functions/utils";
import {useContext} from "react";
import {ValoresContext} from "@/context/ValoresContext";
import {Poupanca} from "@/components/pages/pagina-inicial/poupanca";

export function Resultados() {

    const {valorSaldo, valorSaldoPoupanca} = useContext(ValoresContext);

    return (
        <div className={`flex flex-col w-full gap-4`}>
            <Poupanca />
            <div className={`flex items-center justify-between ${valorSaldo < 0 ? 'bg-error text-error-content' : 'bg-accent text-accent-content'}  py-2 px-4`}>
                <div className={`flex p-1`}>
                    <h1 className={`text-[20pt]`}>Saldo</h1>
                </div>
                <div className={`flex p-1`}>
                    <h2 className={`text-[20pt]`}>{formatarMoedaBrasileira(valorSaldo.toString())}</h2>
                </div>
            </div>

            <div className={`flex items-center justify-between ${valorSaldo < 0 ? 'bg-error/60 text-error-content' : 'bg-info text-info-content'} py-2 px-4`}>
                <div className={`flex justify-center p-1`}>
                    <h1 className={`text-[18pt]`}>Saldo + Poupança</h1>
                </div>
                <div className={`flex justify-center p-1`}>
                    <h2 className={`text-[18pt]`}>{formatarMoedaBrasileira(valorSaldoPoupanca.toString())}</h2>
                </div>
            </div>
        </div>
    )
}