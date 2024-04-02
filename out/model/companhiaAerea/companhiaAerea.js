"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanhiaAerea = void 0;
class CompanhiaAerea {
    constructor(nome, sigla) {
        this._nome = nome;
        this._sigla = sigla;
    }
    /**
     * Getter nome
     * @return {string}
     */
    get nome() {
        return this._nome;
    }
    /**
     * Getter sigla
     * @return {string}
     */
    get sigla() {
        return this._sigla;
    }
    /**
     * Setter nome
     * @param {string} value
     */
    set nome(value) {
        this._nome = value;
    }
    /**
     * Setter sigla
     * @param {string} value
     */
    set sigla(value) {
        this._sigla = value;
    }
}
exports.CompanhiaAerea = CompanhiaAerea;
