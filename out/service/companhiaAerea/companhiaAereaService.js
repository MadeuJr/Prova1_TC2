"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanhiaAereaService = void 0;
class CompanhiaAereaService {
    constructor() {
        this.companhias = [];
    }
    getCompanhias() {
        return this.companhias;
    }
    getCompanhiaAereaByName(name) {
        return this.companhias.find((CompanhiaAerea) => CompanhiaAerea.nome === name);
    }
    addCompanhiaAerea(CompanhiaAereaToAdd) {
        this.companhias.push(CompanhiaAereaToAdd);
    }
    deleteCompanhiaAerea(nameToRemove) {
        try {
            this.companhias = this.companhias.filter((CompanhiaAerea) => CompanhiaAerea.nome !== nameToRemove);
        }
        catch (error) {
            throw new Error('Não foi possivel deletar a Companhia Aerea.');
        }
    }
    updateCompanhiaAerea(nameToUpdate, updatedCompanhiaAerea) {
        const updateIndex = this.companhias.findIndex((CompanhiaAerea) => CompanhiaAerea.nome === nameToUpdate);
        try {
            if (updateIndex >= 0) {
                this.companhias[updateIndex] = updatedCompanhiaAerea;
            }
            else {
            }
        }
        catch (error) {
            throw new Error('Não foi possível atualizar a Companhia Aerea');
        }
    }
}
exports.CompanhiaAereaService = CompanhiaAereaService;
