import { Passageiro } from '../passageiro/passageiro';

export class Embarque {
    private _idEmbarque: number;
    private _idVoo: number;
    private _portaoEmbarque: number;
    private _data: Date;

    constructor(
        portaoEmbarque: number,
        data: Date,
        voo: number,
        idEmbarque: number
    ) {
        this._data = data;
        this._portaoEmbarque = portaoEmbarque;
        this._idVoo = voo;
        this._idEmbarque = idEmbarque;
    }

    /**
     * Getter voo
     * @return {number}
     */
    public get idVoo(): number {
        return this._idVoo;
    }

    /**
     * Getter portaoEmbarque
     * @return {number}
     */
    public get portaoEmbarque(): number {
        return this._portaoEmbarque;
    }

    /**
     * Getter data
     * @return {Date}
     */
    public get data(): Date {
        return this._data;
    }

    /**
     * Getter idEmbarque
     * @return {number}
     */
    public get idEmbarque(): number {
        return this._idEmbarque;
    }

    /**
     * Setter voo
     * @param {number} value
     */
    public set idVoo(value: number) {
        this._idVoo = value;
    }

    /**
     * Setter portaoEmbarque
     * @param {number} value
     */
    public set portaoEmbarque(value: number) {
        this._portaoEmbarque = value;
    }

    /**
     * Setter data
     * @param {Date} value
     */
    public set data(value: Date) {
        this._data = value;
    }

    /**
     * Setter idEmbarque
     * @param {number} value
     */
    public set idEmbarque(value: number) {
        this._idEmbarque = value;
    }

    iniciarCheckIn(): void {
        console.log(`CheckIn do voo com ID ${this._idVoo} Iniciada`);
    }
    pararCheckIn(): void {
        console.log(`CheckIn do voo com ID ${this._idVoo} Finalizado`);
    }
    finalizarVoo(): void {
        console.log(`Voo com ID ${this._idVoo} Chegou ao seu destino`);
    }
    atrasarVoo(): void {
        console.log(`Voo com ID ${this._idVoo} está Atrasado`);
    }
    embarcarPassageiro(passageiro: Passageiro): void {
        console.log(`Passageiro com CPF ${passageiro.cpf} embarcou no voo com ID ${this._idVoo}`)
    }
}
