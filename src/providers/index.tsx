import {ReactNode} from "react";
import {DespesasContextProvider} from "@/context/DespesasContext";
import {ReceitasContextProvider} from "@/context/ReceitasContext";
import {ValoresContextProvider} from "@/context/ValoresContext";

export function Providers({children}: { children: ReactNode }) {
    return (
        <DespesasContextProvider>
            <ReceitasContextProvider>
                <ValoresContextProvider>
                    {children}
                </ValoresContextProvider>
            </ReceitasContextProvider>
        </DespesasContextProvider>
    )
}