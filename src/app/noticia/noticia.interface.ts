export interface Noticia {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publiblishedAt: Date;
    content: string;
}

export interface Source {
    id: string;
    name: string;
}
