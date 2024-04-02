"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AeroportoService = void 0;
class AeroportoService {
    constructor() {
        this.aeroportos = [];
    }
    getAeroportos() {
        return this.aeroportos;
    }
    getAeroportoByName(name) {
        return this.aeroportos.find((aeroporto) => aeroporto.nome === name);
    }
    addAeroporto(aeroportoToAdd) {
        this.aeroportos.push(aeroportoToAdd);
    }
    deleteAeroporto(nameToRemove) {
        try {
            this.aeroportos = this.aeroportos.filter((aeroporto) => aeroporto.nome !== nameToRemove);
        }
        catch (error) {
            throw new Error('Não foi possível deletar o aeroporto');
        }
    }
    updateAeroporto(nameToUpdate, updatedAeroporto) {
        const updateIndex = this.aeroportos.findIndex((aeroporto) => aeroporto.nome === nameToUpdate);
        try {
            if (updateIndex >= 0) {
                this.aeroportos[updateIndex] = updatedAeroporto;
            }
        }
        catch (error) {
            throw new Error('Não foi possível atualizar o aeroporto');
        }
    }
}
exports.AeroportoService = AeroportoService;
