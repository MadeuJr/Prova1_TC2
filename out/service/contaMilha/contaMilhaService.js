"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaMilhaService = void 0;
const enumCartaoMilha_1 = require("../../model/passageiro/enumCartaoMilha");
class ContaMilhaService {
    constructor() {
        this.contasMilhas = [];
    }
    getContasMilhas() {
        return this.contasMilhas;
    }
    getContaMilhaByPassageiroID(passageiroID) {
        return this.contasMilhas.find((ContaMilha) => ContaMilha.donoConta.cpf === passageiroID);
    }
    addContaMilha(ContaMilhaToAdd) {
        if (ContaMilhaToAdd.donoConta.cartaoMilha === enumCartaoMilha_1.CartaoMilha.SIM) {
            this.contasMilhas.push(ContaMilhaToAdd);
        }
        else {
            console.log(`Cartão do passageiro com CPF ${ContaMilhaToAdd.donoConta.cpf} não acumula milhas`);
        }
    }
    deleteContaMilha(contaPassageiroToRemove) {
        try {
            this.contasMilhas = this.contasMilhas.filter((ContaMilha) => ContaMilha.donoConta !== contaPassageiroToRemove);
        }
        catch (error) {
            throw new Error('Não foi possivel deletar a Conta de Milhas.');
        }
    }
    updateContaMilha(cpfPassageiroToUpdate, updatedContaMilha) {
        const updateIndex = this.contasMilhas.findIndex((ContaMilha) => ContaMilha.donoConta.cpf === cpfPassageiroToUpdate);
        try {
            if (updateIndex >= 0) {
                this.contasMilhas[updateIndex] = updatedContaMilha;
            }
            else {
            }
        }
        catch (error) {
            throw new Error('Não foi possível atualizar a Conta de Milhas');
        }
    }
}
exports.ContaMilhaService = ContaMilhaService;
