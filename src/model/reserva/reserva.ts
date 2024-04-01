export class Reserva {
    private _idReserva: number;
    private _cpfPassageiro : string;
    private _idVoo: number;
    private _data: Date;


	constructor(idReserva: number, idVoo: number, data: Date, cpfPassageiro:string) {
		this._idReserva = idReserva;
		this._idVoo = idVoo;
		this._data = data;
        this._cpfPassageiro = cpfPassageiro;
	}


    /**
     * Getter idReserva
     * @return {number}
     */
	public get idReserva(): number {
		return this._idReserva;
	}

    /**
     * Getter cpfPassageiro
     * @return {string}
     */
	public get cpfPassageiro(): string {
		return this._cpfPassageiro;
	}

    /**
     * Getter idVoo
     * @return {number}
     */
	public get idVoo(): number {
		return this._idVoo;
	}

    /**
     * Getter data
     * @return {Date}
     */
	public get data(): Date {
		return this._data;
	}

    /**
     * Setter idReserva
     * @param {number} value
     */
	public set idReserva(value: number) {
		this._idReserva = value;
	}

    /**
     * Setter cpfPassageiro
     * @param {string} value
     */
	public set cpfPassageiro(value: string) {
		this._cpfPassageiro = value;
	}

    /**
     * Setter idVoo
     * @param {number} value
     */
	public set idVoo(value: number) {
		this._idVoo = value;
	}

    /**
     * Setter data
     * @param {Date} value
     */
	public set data(value: Date) {
		this._data = value;
	}


    reservar() {
        console.log(`Reserva de id ${this._idReserva} feita`)
    }
    pagarReserva() {
        console.log(`Reserva de id ${this._idReserva} Paga`)
    }
    cancelarReserva() {
        console.log(`Reserva de id ${this._idReserva} cancelada`)
    }
    alterarReserva() {
        console.log(`Reserva de id ${this._idReserva} Alterada`)
    }
}
