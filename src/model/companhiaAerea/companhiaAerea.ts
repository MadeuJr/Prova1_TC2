export class CompanhiaAerea {
    private _nome: string;
    private _sigla: string;
    constructor(nome: string, sigla: string) {
        this._nome = nome;
        this._sigla = sigla;
    }

    /**
     * Getter nome
     * @return {string}
     */
    public get nome(): string {
        return this._nome;
    }

    /**
     * Getter sigla
     * @return {string}
     */
    public get sigla(): string {
        return this._sigla;
    }

    /**
     * Setter nome
     * @param {string} value
     */
    public set nome(value: string) {
        this._nome = value;
    }

    /**
     * Setter sigla
     * @param {string} value
     */
    public set sigla(value: string) {
        this._sigla = value;
    }
}
