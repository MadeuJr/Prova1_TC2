// TODO Criar quantidade de espaços em um voo e controlar a capacidade máxima do mesmo

export class Voo {
    private _tempo: Date;
    private _milhas: number;
    private _idVoo : number;

    constructor(tempo: Date, milhas: number, idVoo: number) {
        this._tempo = tempo;
        this._milhas = milhas;
        this._idVoo = idVoo;
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
     * Getter idVoo
     * @return {number}
     */
	public get idVoo(): number {
		return this._idVoo;
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
    
    /**
     * Setter idVoo
     * @param {number} value
     */
	public set idVoo(value: number) {
		this._idVoo = value;
	}

}
