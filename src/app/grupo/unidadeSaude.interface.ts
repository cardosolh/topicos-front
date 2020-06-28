
export interface UnidadeSaude {
    id: number;
    Nome: string;
    TesteCovid: boolean;
    Tipo: number;
    Localizacao: Localizacao;
}

export interface Localizacao {
    Latitude: number;
    Longitude: number;
}
