export class Aeroporto {
    private _sigla:string;
    private _nome:string;
    private _pais:string;
    private _taxa:number;
    
	constructor(sigla: string, nome: string, pais: string, taxa: number) {
		this._sigla = sigla;
		this._nome = nome;
		this._pais = pais;
		this._taxa = taxa;
	}
        

    /**
     * Getter sigla
     * @return {string}
     */
	public get sigla(): string {
		return this._sigla;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter pais
     * @return {string}
     */
	public get pais(): string {
		return this._pais;
	}

    /**
     * Getter taxa
     * @return {number}
     */
	public get taxa(): number {
		return this._taxa;
	}

    /**
     * Setter sigla
     * @param {string} value
     */
	public set sigla(value: string) {
		this._sigla = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter pais
     * @param {string} value
     */
	public set pais(value: string) {
		this._pais = value;
	}

    /**
     * Setter taxa
     * @param {number} value
     */
	public set taxa(value: number) {
		this._taxa = value;
	}
    
    
}