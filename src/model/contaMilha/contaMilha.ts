import { CartaoMilha } from '../passageiro/enumCartaoMilha';
import { Passageiro } from '../passageiro/passageiro';
import { Status } from './statusEnun';

export class ContaMilha {
    private _donoConta: Passageiro;
    private _numeroConta: number;
    private _totalMilhas: number;
    private _status: Status;

    constructor(
        donoConta: Passageiro,
        numeroConta: number,
        totalMilhas: number,
        status: Status
    ) {
        if (donoConta.cartaoMilha === CartaoMilha.NAO) {
            throw new Error(
                `O Cartão do Passageiro de CPF ${donoConta.cpf} não acumula milhas`
            );
        } else {
            this._donoConta = donoConta;
            this._numeroConta = numeroConta;
            this._totalMilhas = totalMilhas;
            this._status = status;
        }
    }

    /**
     * Getter donoConta
     * @return {Passageiro}
     */
    public get donoConta(): Passageiro {
        return this._donoConta;
    }

    /**
     * Getter numeroConta
     * @return {number}
     */
    public get numeroConta(): number {
        return this._numeroConta;
    }

    /**
     * Getter totalMilhas
     * @return {number}
     */
    public get totalMilhas(): number {
        return this._totalMilhas;
    }

    /**
     * Getter status
     * @return {Status}
     */
    public get status(): Status {
        return this._status;
    }

    /**
     * Setter numeroConta
     * @param {number} value
     */
    public set numeroConta(value: number) {
        this._numeroConta = value;
    }

    /**
     * Setter totalMilhas
     * @param {number} value
     */
    public set totalMilhas(value: number) {
        this._totalMilhas = value;
    }

    /**
     * Setter status
     * @param {Status} value
     */
    public set status(value: Status) {
        this._status = value;
    }
}
