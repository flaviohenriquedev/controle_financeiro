import {Despesa} from "@/class/Despesa";
import {Receita} from "@/class/Receita";

export const fetchDespesas = async (): Promise<Despesa[]> => {
    return await fetch("http://localhost:3333/despesas")
        .then(result => result.json())
        .catch(error => console.log(error));
};

export const insertDespesa = async (despesa: Despesa): Promise<Despesa> => {
    return await fetch("http://localhost:3333/despesas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(despesa)
    }).then(result => result.json())
        .catch(error => console.log(error));
}

export const fetchReceitas = async (): Promise<Receita[]> => {
    return await fetch("http://localhost:3333/receitas")
        .then(result => result.json())
        .catch(error => console.log(error));
};

export const insertReceita = async (despesa: Despesa): Promise<Receita> => {
    return await fetch("http://localhost:3333/receitas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(despesa)
    }).then(result => result.json())
        .catch(error => console.log(error));
}