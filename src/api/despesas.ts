import {Despesa} from "@/class/Despesa";

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

export const updateDespesa = async (despesa: Despesa): Promise<Despesa> => {
    return await fetch(`http://localhost:3333/despesas/${despesa.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(despesa)
    }).then(result => result.json())
        .catch(error => console.log(error));
}

export const deleteDespesa = async (id: number): Promise<void> => {
    await fetch(`http://localhost:3333/despesas/${id}`, {
        method: "DELETE",
    }).then(_ => {})
}