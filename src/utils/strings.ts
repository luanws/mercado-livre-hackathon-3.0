function normalize(s: string) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

function normalizeLowerCase(s: string) {
    return normalize(s).toLowerCase()
}

export { normalize, normalizeLowerCase }