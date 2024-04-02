"use strict";
// TODO Criar quantidade de espaços em um voo e controlar a capacidade máxima do mesmo
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
class Voo {
    constructor(tempo, milhas, idVoo) {
        this._tempo = tempo;
        this._milhas = milhas;
        this._idVoo = idVoo;
    }
    /**
     * Getter tempo
     * @return {Date}
     */
    get tempo() {
        return this._tempo;
    }
    /**
     * Getter milhas
     * @return {number}
     */
    get milhas() {
        return this._milhas;
    }
    /**
     * Getter idVoo
     * @return {number}
     */
    get idVoo() {
        return this._idVoo;
    }
    /**
     * Setter tempo
     * @param {Date} value
     */
    set tempo(value) {
        this._tempo = value;
    }
    /**
     * Setter milhas
     * @param {number} value
     */
    set milhas(value) {
        this._milhas = value;
    }
    /**
     * Setter idVoo
     * @param {number} value
     */
    set idVoo(value) {
        this._idVoo = value;
    }
}
exports.Voo = Voo;
