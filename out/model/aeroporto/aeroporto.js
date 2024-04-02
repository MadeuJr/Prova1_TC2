"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aeroporto = void 0;
class Aeroporto {
    constructor(sigla, nome, pais, taxa) {
        this._sigla = sigla;
        this._nome = nome;
        this._pais = pais;
        this._taxa = taxa;
    }
    /**
     * Getter sigla
     * @return {string}
     */
    get sigla() {
        return this._sigla;
    }
    /**
     * Getter nome
     * @return {string}
     */
    get nome() {
        return this._nome;
    }
    /**
     * Getter pais
     * @return {string}
     */
    get pais() {
        return this._pais;
    }
    /**
     * Getter taxa
     * @return {number}
     */
    get taxa() {
        return this._taxa;
    }
    /**
     * Setter sigla
     * @param {string} value
     */
    set sigla(value) {
        this._sigla = value;
    }
    /**
     * Setter nome
     * @param {string} value
     */
    set nome(value) {
        this._nome = value;
    }
    /**
     * Setter pais
     * @param {string} value
     */
    set pais(value) {
        this._pais = value;
    }
    /**
     * Setter taxa
     * @param {number} value
     */
    set taxa(value) {
        this._taxa = value;
    }
}
exports.Aeroporto = Aeroporto;
