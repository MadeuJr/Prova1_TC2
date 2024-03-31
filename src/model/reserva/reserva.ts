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

    reservar(params: any) {
        console.log(`Reserva de id ${this._idReserva} feita`)
    }
    pagarReserva(params: any) {
        console.log(`Reserva de id ${this._idReserva} Paga`)
    }
    cancelarReserva(params: any) {
        console.log(`Reserva de id ${this._idReserva} cancelada`)
    }
    alterarReserva(params: any) {
        console.log(`Reserva de id ${this._idReserva} Alterada`)
    }
}
