export function openModal(idModal: string) {
    (document.getElementById(idModal) as HTMLDialogElement).showModal()
}

export function closeModal(idModal: string) {
    (document.getElementById(idModal) as HTMLDialogElement).close()
}

export function mascaraCPF(valor?: string): string {
    if (valor) {
        valor.replace(/\D/g, '');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

        return valor;
    }

    return ''
}

export function mascaraCNPJ(valor?: string): string {
    if (valor) {
        valor.replace(/\D/g, '');
        valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
        valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
        valor = valor.replace(/(\d{4})(\d{1,2})$/, '$1-$2');

        return valor;
    }

    return ''
}

export function formatarMoedaBrasileira(valor: number): string {
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor);
}

export function extrairNumeros(str: string): string {
    if (str && str.length > 0) {
        const numeros = str.match(/\d+/g);
        return numeros ? numeros.join('') : '';
    }
    return ''
}

export function generateRandomId(min: number = 1, max: number = 100000): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getValorEmString(valor: any): string {
    return valor.toString()
}
