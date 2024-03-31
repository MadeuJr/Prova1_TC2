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
        this._donoConta = donoConta;
        this._numeroConta = numeroConta;
        this._totalMilhas = totalMilhas;
        this._status = status;
    }
}
