import { ContaMilha } from "../../model/contaMilha/contaMilha";
import { CartaoMilha } from "../../model/passageiro/enumCartaoMilha";
import { Passageiro } from "../../model/passageiro/passageiro";

export class ContaMilhaService {
    private contasMilhas: ContaMilha[] = [];

    getContasMilhas(): ContaMilha[] {
        return this.contasMilhas;
    }

    getContaMilhaByPassageiroID(passageiroID: string): ContaMilha | undefined {
        return this.contasMilhas.find((ContaMilha) => ContaMilha.donoConta.cpf === passageiroID);
    }

    addContaMilha(ContaMilhaToAdd: ContaMilha): void {
        if (ContaMilhaToAdd.donoConta.cartaoMilha === CartaoMilha.SIM) {
            this.contasMilhas.push(ContaMilhaToAdd);
        }
        else{
            console.log(`Cartão do passageiro com CPF ${ContaMilhaToAdd.donoConta.cpf} não acumula milhas`);
            
        }
    }

    deleteContaMilha(contaPassageiroToRemove: Passageiro): void {
       try {
         this.contasMilhas = this.contasMilhas.filter(
             (ContaMilha) => ContaMilha.donoConta !== contaPassageiroToRemove
         );
       } catch (error) {
        throw new Error('Não foi possivel deletar a Conta de Milhas.');
       }
    }

    updateContaMilha(cpfPassageiroToUpdate: string, updatedContaMilha: ContaMilha): void {
        const updateIndex = this.contasMilhas.findIndex(
            (ContaMilha) => ContaMilha.donoConta.cpf === cpfPassageiroToUpdate
        );
            
       try {
         if (updateIndex >= 0) {
             this.contasMilhas[updateIndex] = updatedContaMilha;
         } else {
             
         }
       } catch (error) {
        throw new Error('Não foi possível atualizar a Conta de Milhas');
       }
    }
}