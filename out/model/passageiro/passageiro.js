"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passageiro = void 0;
class Passageiro {
    constructor(cpf, nome, cc, cartaoMilha, status) {
        this._cpf = cpf;
        this._nome = nome;
        this._cc = cc;
        this._cartaoMilha = cartaoMilha;
        this._status = status;
    }
    /**
     * Getter cpf
     * @return {string}
     */
    get cpf() {
        return this._cpf;
    }
    /**
     * Getter nome
     * @return {string}
     */
    get nome() {
        return this._nome;
    }
    /**
     * Getter cc
     * @return {string}
     */
    get cc() {
        return this._cc;
    }
    /**
     * Getter cartaoMilha
     * @return {string}
     */
    get cartaoMilha() {
        return this._cartaoMilha;
    }
    /**
     * Getter status
     * @return {string}
     */
    get status() {
        return this._status;
    }
    /**
     * Setter cpf
     * @param {string} value
     */
    set cpf(value) {
        this._cpf = value;
    }
    /**
     * Setter nome
     * @param {string} value
     */
    set nome(value) {
        this._nome = value;
    }
    /**
     * Setter cc
     * @param {string} value
     */
    set cc(value) {
        this._cc = value;
    }
    /**
     * Setter cartaoMilha
     * @param {string} value
     */
    set cartaoMilha(value) {
        this._cartaoMilha = value;
    }
    /**
     * Setter status
     * @param {string} value
     */
    set status(value) {
        this._status = value;
    }
    creditoMilha(contaMilhaService, valor) {
        const creditarMilhas = contaMilhaService.getContaMilhaByPassageiroID(this._cpf);
        if (this._cartaoMilha === 0) {
            console.log('O Cartão do passageiro não credita milhas');
        }
        else if (creditarMilhas !== undefined) {
            creditarMilhas.totalMilhas += valor;
            contaMilhaService.updateContaMilha(this._cpf, creditarMilhas);
        }
        else {
            console.log('O Cartão do passageiro não credita milhas ou ele não tem uma Conta de milhas');
        }
    }
    consumoMilha(contaMilhaService, valor) {
        const consumirMilhas = contaMilhaService.getContaMilhaByPassageiroID(this._cpf);
        if (this._cartaoMilha === 0) {
            console.log('O Cartão do passageiro não credita milhas');
        }
        else if (consumirMilhas !== undefined) {
            consumirMilhas.totalMilhas -= valor;
            contaMilhaService.updateContaMilha(this._cpf, consumirMilhas);
        }
        else {
            console.log('O Passageiro não tem uma Conta de Milhas');
        }
    }
}
exports.Passageiro = Passageiro;
