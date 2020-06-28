
export interface Usuario {
    Id: number;
    Nome: string;
    InfectadoCovid: boolean;
    Localizacao: Localizacao;

    Questionario: Questionario[];

}

export interface Localizacao {
    Latitude: number;
    Longitude: number;

}

export interface Questionario {
    Pergunta: string;
    Resposta: number;

}

export interface UsuariosEncontrados {
    Localizacao: Localizacao;
    PessoasEncontradas: number;
    Raio: number;
}
