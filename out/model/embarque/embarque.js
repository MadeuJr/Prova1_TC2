"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embarque = void 0;
class Embarque {
    constructor(portaoEmbarque, data, voo, idEmbarque) {
        this._data = data;
        this._portaoEmbarque = portaoEmbarque;
        this._idVoo = voo;
        this._idEmbarque = idEmbarque;
    }
    /**
     * Getter voo
     * @return {number}
     */
    get idVoo() {
        return this._idVoo;
    }
    /**
     * Getter portaoEmbarque
     * @return {number}
     */
    get portaoEmbarque() {
        return this._portaoEmbarque;
    }
    /**
     * Getter data
     * @return {Date}
     */
    get data() {
        return this._data;
    }
    /**
     * Getter idEmbarque
     * @return {number}
     */
    get idEmbarque() {
        return this._idEmbarque;
    }
    /**
     * Setter voo
     * @param {number} value
     */
    set idVoo(value) {
        this._idVoo = value;
    }
    /**
     * Setter portaoEmbarque
     * @param {number} value
     */
    set portaoEmbarque(value) {
        this._portaoEmbarque = value;
    }
    /**
     * Setter data
     * @param {Date} value
     */
    set data(value) {
        this._data = value;
    }
    /**
     * Setter idEmbarque
     * @param {number} value
     */
    set idEmbarque(value) {
        this._idEmbarque = value;
    }
    iniciarCheckIn() {
        console.log(`CheckIn do voo com ID ${this._idVoo} Iniciada`);
    }
    pararCheckIn() {
        console.log(`CheckIn do voo com ID ${this._idVoo} Finalizado`);
    }
    finalizarVoo() {
        console.log(`Voo com ID ${this._idVoo} Chegou ao seu destino`);
    }
    atrasarVoo() {
        console.log(`Voo com ID ${this._idVoo} está Atrasado`);
    }
    embarcarPassageiro(passageiro) {
        console.log(`Passageiro com CPF ${passageiro.cpf} embarcou no voo com ID ${this._idVoo}`);
    }
}
exports.Embarque = Embarque;
