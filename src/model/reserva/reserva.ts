export class Reserva {
    private _data: Date;
    //TODO fazer a ligação de um passageiro e um Voo

    constructor(data: Date) {
        this._data = data;
    }

    /**
     * Getter data
     * @return {Date}
     */
    public get data(): Date {
        return this._data;
    }

    /**
     * Setter data
     * @param {Date} value
     */
    public set data(value: Date) {
        this._data = value;
    }

    reservar(params: any) {}
    pagarReserva(params: any) {}
    cancelarReserva(params: any) {}
    alterarReserva(params: any) {}
}
