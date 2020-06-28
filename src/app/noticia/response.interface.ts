import { Noticia } from './noticia.interface';

export interface Response {
    status: string;
    totalResults: number;
    articles: Noticia[];
}
