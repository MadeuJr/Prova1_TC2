"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
class Reserva {
    constructor(idReserva, idVoo, data, cpfPassageiro) {
        this._idReserva = idReserva;
        this._idVoo = idVoo;
        this._data = data;
        this._cpfPassageiro = cpfPassageiro;
    }
    /**
     * Getter idReserva
     * @return {number}
     */
    get idReserva() {
        return this._idReserva;
    }
    /**
     * Getter cpfPassageiro
     * @return {string}
     */
    get cpfPassageiro() {
        return this._cpfPassageiro;
    }
    /**
     * Getter idVoo
     * @return {number}
     */
    get idVoo() {
        return this._idVoo;
    }
    /**
     * Getter data
     * @return {Date}
     */
    get data() {
        return this._data;
    }
    /**
     * Setter idReserva
     * @param {number} value
     */
    set idReserva(value) {
        this._idReserva = value;
    }
    /**
     * Setter cpfPassageiro
     * @param {string} value
     */
    set cpfPassageiro(value) {
        this._cpfPassageiro = value;
    }
    /**
     * Setter idVoo
     * @param {number} value
     */
    set idVoo(value) {
        this._idVoo = value;
    }
    /**
     * Setter data
     * @param {Date} value
     */
    set data(value) {
        this._data = value;
    }
    reservar() {
        console.log(`Reserva de id ${this._idReserva} feita`);
    }
    pagarReserva() {
        console.log(`Reserva de id ${this._idReserva} Paga`);
    }
    cancelarReserva() {
        console.log(`Reserva de id ${this._idReserva} cancelada`);
    }
    alterarReserva() {
        console.log(`Reserva de id ${this._idReserva} Alterada`);
    }
}
exports.Reserva = Reserva;
