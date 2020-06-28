
export interface Loja {
    id: number;
    Nome: string;
    TesteCovid: boolean;
    Suprimentos: Suprimento[];
    Localizacao: Localizacao;
}

export interface Localizacao {
    Latitude: number;
    Longitude: number;
}

export interface Suprimento {

    id: number;
    Nome: string;
    Quantidade: number;
    UnidadeMedida: string;
}
