export function BRLValueformat(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

export function Valueformat(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        currency: 'BRL',
    }).format(value);
}