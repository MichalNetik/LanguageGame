export interface WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;
}

export class WordPairModel implements WordPairInterface {
    id: number;
    base: string;
    translated: string;
    description: string;

    constructor(data: WordPairInterface) {
        this.id = data.id;
        this.base = data.base;
        this.translated = data.translated;
        this.description = data.description;
    }
}

