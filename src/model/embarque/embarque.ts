import { Passageiro } from '../passageiro/passageiro';

export class Embarque {
    private _portaoEmbarque: number;
    private _data: Date;

    constructor(portaoEmbarque: number, data: Date) {
        this._data = data;
        this._portaoEmbarque = portaoEmbarque;
    }

    iniciarCheckIn(params: any): void {}
    pararCheckIn(params: any): void {}
    finalizarVoo(params: any): void {}
    atrasarVoo(params: any): void {}
    embarcarPassageiro(params: any): void {}
}
