import {Receita} from "@/class/Receita";

export const fetchReceitas = async (): Promise<Receita[]> => {
    return await fetch("http://localhost:3333/receitas")
        .then(result => result.json())
        .catch(error => console.log(error));
};

export const insertReceita = async (receita: Receita): Promise<Receita> => {
    return await fetch("http://localhost:3333/receitas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receita)
    }).then(result => result.json())
        .catch(error => console.log(error));
}

export const updateReceita = async (receita: Receita): Promise<Receita> => {
    return await fetch(`http://localhost:3333/receitas/${receita.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receita)
    }).then(result => result.json())
        .catch(error => console.log(error));
}

export const deleteReceita = async (id: number): Promise<void> => {
    await fetch(`http://localhost:3333/receitas/${id}`, {
        method: "DELETE",
    }).then(_ => {})
}
