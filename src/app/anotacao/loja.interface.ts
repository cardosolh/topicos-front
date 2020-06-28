
export interface Loja {
    id: number;
    Nome: string;
    TesteCovid: boolean;
    Suprimentos: Suprimento[];
    Localizacao: Localizacao;

    Direcoes: string;
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

export interface LojasComTestes {
    id: number;
    Nome: string;
    Distancia: number;
    Tipo: number;
    Localizacao: Localizacao;
}

export interface UsuariosEncontrados {
    Localizacao: Localizacao;
    PessoasEncontradas: number;
    Raio: number;
}
