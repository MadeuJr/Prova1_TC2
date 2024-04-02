"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaMilha = void 0;
class ContaMilha {
    constructor(donoConta, numeroConta, totalMilhas, status) {
        this._donoConta = donoConta;
        this._numeroConta = numeroConta;
        this._totalMilhas = totalMilhas;
        this._status = status;
    }
    /**
     * Getter donoConta
     * @return {Passageiro}
     */
    get donoConta() {
        return this._donoConta;
    }
    /**
     * Getter numeroConta
     * @return {number}
     */
    get numeroConta() {
        return this._numeroConta;
    }
    /**
     * Getter totalMilhas
     * @return {number}
     */
    get totalMilhas() {
        return this._totalMilhas;
    }
    /**
     * Getter status
     * @return {Status}
     */
    get status() {
        return this._status;
    }
    /**
     * Setter numeroConta
     * @param {number} value
     */
    set numeroConta(value) {
        this._numeroConta = value;
    }
    /**
     * Setter totalMilhas
     * @param {number} value
     */
    set totalMilhas(value) {
        this._totalMilhas = value;
    }
    /**
     * Setter status
     * @param {Status} value
     */
    set status(value) {
        this._status = value;
    }
}
exports.ContaMilha = ContaMilha;
