import { Embarque } from '../../model/embarque/embarque';
import { VooService } from '../voo/vooService';

export class EmbarqueService {
    private embarques: Embarque[] = [];
    private _vooService: VooService;
    

	constructor(vooService: VooService) {
		this._vooService = vooService;
	}
    

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
        const vooArray = this._vooService.getVoos()
        const vooExists = vooArray.find(
            (voo) => voo.idVoo === EmbarqueToAdd.idVoo
        );
        if (embarqueIdExists === undefined && vooExists !== undefined) {
            this.embarques.push(EmbarqueToAdd);
        } else {
            console.log(
                'Não foi possivel adicionar Embarque.'
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
