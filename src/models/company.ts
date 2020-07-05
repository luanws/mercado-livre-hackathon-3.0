class Company {
    key?: string | null
    name: string
    corporateName: string
    cnpj: string
    logoUrl: string
    city: string
    uf: string

    constructor(company: Company) {
        this.key = company.key
        this.name = company.name
        this.corporateName = company.corporateName
        this.cnpj = company.cnpj
        this.logoUrl = company.logoUrl
        this.city = company.city
        this.uf = company.uf
    }
}

export default Company