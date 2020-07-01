interface CompanyInterface {
    name: string
    corporateName: string
    cnpj: string
    logoUrl: string
    city: string
    uf: string
}

class Company {
    name: string
    corporateName: string
    cnpj: string
    logoUrl: string
    city: string
    uf: string

    constructor(company: CompanyInterface) {
        this.name = company.name
        this.corporateName = company.corporateName
        this.cnpj = company.cnpj
        this.logoUrl = company.logoUrl
        this.city = company.city
        this.uf = company.uf
    }
}

export default Company