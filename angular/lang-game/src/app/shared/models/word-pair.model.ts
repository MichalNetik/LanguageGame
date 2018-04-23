export interface WordPairInterface {
    id: number;
    baseWord: string;
    translatedWord: string;
    description: string;
}

export class WordPairModel implements WordPairInterface {
    id: number;
    baseWord: string;
    translatedWord: string;
    description: string;

    constructor(data: WordPairInterface) {
        this.id = data.id;
        this.baseWord = data.baseWord;
        this.translatedWord = data.translatedWord;
        this.description = data.description;
    }
}

