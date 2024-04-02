"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassageiroService = void 0;
class PassageiroService {
    constructor() {
        this.passageiros = [];
    }
    getpassageiros() {
        return this.passageiros;
    }
    getPassageiroByCPF(cpf) {
        return this.passageiros.find((Passageiro) => Passageiro.cpf === cpf);
    }
    addPassageiro(passageiroToAdd) {
        const passageiroExists = this.passageiros.find((passageiro) => passageiro.cpf === passageiroToAdd.cpf);
        if (passageiroExists === undefined) {
            this.passageiros.push(passageiroToAdd);
        }
        else {
            console.log("Passageiro já cadastrado");
        }
    }
    deletePassageiro(CPFToRemove) {
        try {
            this.passageiros = this.passageiros.filter((Passageiro) => Passageiro.nome !== CPFToRemove);
        }
        catch (error) {
            throw new Error('Não foi possivel deletar o Passageiro.');
        }
    }
    updatePassageiro(nameToUpdate, updatedPassageiro) {
        const updateIndex = this.passageiros.findIndex((Passageiro) => Passageiro.nome === nameToUpdate);
        try {
            if (updateIndex >= 0) {
                this.passageiros[updateIndex] = updatedPassageiro;
            }
            else {
            }
        }
        catch (error) {
            throw new Error('Não foi possível atualizar o Passageiro');
        }
    }
}
exports.PassageiroService = PassageiroService;
