import { Aeroporto } from '../../model/aeroporto/aeroporto';

export class AeroportoService {
    private aeroportos: Aeroporto[] = [];
    constructor() {}

    getAeroportos(): Aeroporto[] {
        return this.aeroportos;
    }

    getAeroportoByName(name: string): Aeroporto | undefined {
        return this.aeroportos.find((aeroporto) => aeroporto.nome === name);
    }

    addAeroporto(aeroportoToAdd: Aeroporto): void {
        this.aeroportos.push(aeroportoToAdd);
    }

    deleteAeroporto(nameToRemove: string): void {
        try {
            this.aeroportos = this.aeroportos.filter(
                (aeroporto) => aeroporto.nome !== nameToRemove
            );
        } catch (error) {
            throw new Error('Não foi possível deletar o aeroporto');
        }
    }

    updateAeroporto(nameToUpdate: string, updatedAeroporto: Aeroporto): void {
        const updateIndex = this.aeroportos.findIndex(
            (aeroporto) => aeroporto.nome === nameToUpdate
        );

        try {
            if (updateIndex >= 0) {
                this.aeroportos[updateIndex] = updatedAeroporto;
            }
        } catch (error) {
            throw new Error('Não foi possível atualizar o aeroporto');
        } 
    }
}
