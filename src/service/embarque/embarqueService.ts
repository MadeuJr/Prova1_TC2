import { Embarque } from '../../model/embarque/embarque';

export class EmbarqueService {
    private embarques: Embarque[] = [];

    getembarques(): Embarque[] {
        return this.embarques;
    }

    getEmbarqueById(id: number): Embarque | undefined {
        return this.embarques.find((Embarque) => Embarque.idEmbarque === id);
    }

    addEmbarque(EmbarqueToAdd: Embarque): void {
        const embarqueIdExists = this.embarques.find(
            (embarque) => embarque.idEmbarque === EmbarqueToAdd.idEmbarque
        );
        const vooExists = this.embarques.find(
            (embarque) => embarque.voo === EmbarqueToAdd.voo
        );
        if (embarqueIdExists === undefined && vooExists === undefined) {
            this.embarques.push(EmbarqueToAdd);
        } else {
            console.log(
                'Não foi possivel adicionar Embarque porque o ID de embarque já existe.'
            );
        }
    }

    deleteEmbarque(idToRemove: number): void {
        try {
            this.embarques = this.embarques.filter(
                (Embarque) => Embarque.idEmbarque !== idToRemove
            );
        } catch (error) {
            console.log('Não foi possivel deletar o Embarque.');
        }
    }

    updateEmbarque(idToUpdate: number, updatedEmbarque: Embarque): void {
        const updateIndex = this.embarques.findIndex(
            (Embarque) => Embarque.idEmbarque === idToUpdate
        );

        if (updateIndex >= 0) {
            this.embarques[updateIndex] = updatedEmbarque;
        } else {
            console.log('Não foi possível atualizar o Embarque.');
        }
    }
}
