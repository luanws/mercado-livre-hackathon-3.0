interface CompanyInterface {
    key?: string
    name: string
    corporateName: string
    cnpj: string
    logoUrl: string
    city: string
    uf: string
}

class Company {
    key?: string
    name: string
    corporateName: string
    cnpj: string
    logoUrl: string
    city: string
    uf: string

    constructor(company: CompanyInterface) {
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