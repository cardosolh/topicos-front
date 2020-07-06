import { Pessoa } from './../pessoa/pessoa.interface';
export interface Login {
    id: number;
    user: string;
    password: string;
    id_pessoa: number;
    id_perfil: number;

    pessoa: Pessoa;
}
