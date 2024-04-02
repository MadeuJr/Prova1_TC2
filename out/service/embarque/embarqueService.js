"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbarqueService = void 0;
class EmbarqueService {
    constructor(vooService) {
        this.embarques = [];
        this._vooService = vooService;
    }
    getembarques() {
        return this.embarques;
    }
    getEmbarqueById(id) {
        return this.embarques.find((Embarque) => Embarque.idEmbarque === id);
    }
    addEmbarque(EmbarqueToAdd) {
        const embarqueIdExists = this.embarques.find((embarque) => embarque.idEmbarque === EmbarqueToAdd.idEmbarque);
        const vooArray = this._vooService.getVoos();
        const vooExists = vooArray.find((voo) => voo.idVoo === EmbarqueToAdd.idVoo);
        if (embarqueIdExists === undefined && vooExists !== undefined) {
            this.embarques.push(EmbarqueToAdd);
        }
        else {
            console.log('Não foi possivel adicionar Embarque.');
        }
    }
    deleteEmbarque(idToRemove) {
        try {
            this.embarques = this.embarques.filter((Embarque) => Embarque.idEmbarque !== idToRemove);
        }
        catch (error) {
            console.log('Não foi possivel deletar o Embarque.');
        }
    }
    updateEmbarque(idToUpdate, updatedEmbarque) {
        const updateIndex = this.embarques.findIndex((Embarque) => Embarque.idEmbarque === idToUpdate);
        if (updateIndex >= 0) {
            this.embarques[updateIndex] = updatedEmbarque;
        }
        else {
            console.log('Não foi possível atualizar o Embarque.');
        }
    }
}
exports.EmbarqueService = EmbarqueService;
