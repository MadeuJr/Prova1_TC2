"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VooService = void 0;
class VooService {
    constructor() {
        this.voos = [];
    }
    getVoos() {
        return this.voos;
    }
    getVooByID(id) {
        return this.voos.find((voo) => voo.idVoo === id);
    }
    addVoo(VooToAdd) {
        const VooExists = this.voos.find((Voo) => Voo.idVoo === VooToAdd.idVoo);
        if (VooExists === undefined) {
            this.voos.push(VooToAdd);
        }
        else {
            console.log("Voo já cadastrado");
        }
    }
    deleteVoo(idToRemove) {
        try {
            this.voos = this.voos.filter((voo) => voo.idVoo !== idToRemove);
        }
        catch (error) {
            throw new Error('Não foi possivel deletar o Voo.');
        }
    }
    updateVoo(nameToUpdate, updatedVoo) {
        const updateIndex = this.voos.findIndex((voo) => voo.idVoo === nameToUpdate);
        try {
            if (updateIndex >= 0) {
                this.voos[updateIndex] = updatedVoo;
            }
            else {
            }
        }
        catch (error) {
            throw new Error('Não foi possível atualizar o Voo');
        }
    }
}
exports.VooService = VooService;
