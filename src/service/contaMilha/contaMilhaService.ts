import { ContaMilha } from "../../model/contaMilha/contaMilha";
import { Passageiro } from "../../model/passageiro/passageiro";

export class ContaMilhaService {
    private contasMilhas: ContaMilha[] = [];

    getContasMilhas(): ContaMilha[] {
        return this.contasMilhas;
    }

    getContaMilhaByName(contaPassageiro: Passageiro): ContaMilha | undefined {
        return this.contasMilhas.find((ContaMilha) => ContaMilha.donoConta === contaPassageiro);
    }

    addContaMilha(ContaMilhaToAdd: ContaMilha): void {
        this.contasMilhas.push(ContaMilhaToAdd);
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

    updateContaMilha(contaPassageiroToUpdate: Passageiro, updatedContaMilha: ContaMilha): void {
        const updateIndex = this.contasMilhas.findIndex(
            (ContaMilha) => ContaMilha.donoConta === contaPassageiroToUpdate
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