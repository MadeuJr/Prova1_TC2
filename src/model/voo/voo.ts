// TODO Criar quantidade de espaços em um voo e controlar a capacidade máxima do mesmo

export class Voo {
    private _tempo: Date;
    private _milhas: number;

    constructor(tempo: Date, milhas: number) {
        this._tempo = tempo;
        this._milhas = milhas;
    }

    /**
     * Getter tempo
     * @return {Date}
     */
    public get tempo(): Date {
        return this._tempo;
    }

    /**
     * Getter milhas
     * @return {number}
     */
    public get milhas(): number {
        return this._milhas;
    }

    /**
     * Setter tempo
     * @param {Date} value
     */
    public set tempo(value: Date) {
        this._tempo = value;
    }

    /**
     * Setter milhas
     * @param {number} value
     */
    public set milhas(value: number) {
        this._milhas = value;
    }
}
