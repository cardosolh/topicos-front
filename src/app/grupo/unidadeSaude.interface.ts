
export interface UnidadeSaude {
    id: number;
    Nome: string;
    TesteCovid: boolean;
    Tipo: number;
    Localizacao: Localizacao;
    Direcoes: string;
}

export interface Localizacao {
    Latitude: number;
    Longitude: number;
}
export interface UnidadesSaudeComTestes {
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
