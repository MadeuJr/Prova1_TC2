import { Passageiro } from '../passageiro/passageiro';
import { Voo } from '../voo/voo';

export class Embarque {
    private _idEmbarque: number;
    private _voo: Voo;
    private _portaoEmbarque: number;
    private _data: Date;

    constructor(
        portaoEmbarque: number,
        data: Date,
        voo: Voo,
        idEmbarque: number
    ) {
        this._data = data;
        this._portaoEmbarque = portaoEmbarque;
        this._voo = voo;
        this._idEmbarque = idEmbarque;
    }

    /**
     * Getter voo
     * @return {Voo}
     */
    public get voo(): Voo {
        return this._voo;
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
     * @param {Voo} value
     */
    public set voo(value: Voo) {
        this._voo = value;
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
        console.log(`CheckIn do voo com ID ${this._voo.idVoo} Iniciada`);
    }
    pararCheckIn(): void {
        console.log(`CheckIn do voo com ID ${this._voo.idVoo} Finalizado`);
    }
    finalizarVoo(): void {
        console.log(`Voo com ID ${this._voo.idVoo} Chegou ao seu destino`);
    }
    atrasarVoo(): void {
        console.log(`Voo com ID ${this._voo.idVoo} está Atrasado`);
    }
    embarcarPassageiro(passageiro: Passageiro): void {
        console.log(`Passageiro com CPF ${passageiro.cpf} embarcou no voo com ID ${this._voo.idVoo}`)
    }
}
