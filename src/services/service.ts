import Papa from 'papaparse';

export interface APIData {
    UF: `${string}${string}`,
    municipio: string,
    codigoIbge: number,
    ano: number,
    valorInvestimento: number,
    valorDesbloqueado: number,
    valorDesembolsado: number,
    valorEmpenhado: number
}

export class DataService  {
    
    constructor() {}

    async getMockedDataFromAPI() {
        return fetch('/database/carteira_empreendimentos_capitais.csv')
            .then((response) => response.text())
            .then((csvText) => {
                return Papa.parse<APIData>(csvText, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                });
            });
    }

}