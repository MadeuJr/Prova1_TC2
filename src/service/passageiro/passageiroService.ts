import { Passageiro } from '../../model/passageiro/passageiro';

export class passageiroservice {
    private passageiros: Passageiro[] = [];

    getpassageiros(): Passageiro[] {
        return this.passageiros;
    }

    getPassageiroByCPF(cpf: string): Passageiro | undefined {
        return this.passageiros.find((Passageiro) => Passageiro.cpf === cpf);
    }

    addPassageiro(PassageiroToAdd: Passageiro): void {
        this.passageiros.push(PassageiroToAdd);
    }

    deletePassageiro(CPFToRemove: string): void {
        try {
            this.passageiros = this.passageiros.filter(
                (Passageiro) => Passageiro.nome !== CPFToRemove
            );
        } catch (error) {
            throw new Error('Não foi possivel deletar o Passageiro.');
        }
    }

    updatePassageiro(nameToUpdate: string, updatedPassageiro: Passageiro): void {
        const updateIndex = this.passageiros.findIndex(
            (Passageiro) => Passageiro.nome === nameToUpdate
        );

        try {
            if (updateIndex >= 0) {
                this.passageiros[updateIndex] = updatedPassageiro;
            } else {
            }
        } catch (error) {
            throw new Error('Não foi possível atualizar o Passageiro');
        }
    }
}
