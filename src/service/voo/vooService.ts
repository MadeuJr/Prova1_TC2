import { Voo } from '../../model/voo/voo';

export class VooService {
    private voos: Voo[] = [];

    getVoos(): Voo[] {
        return this.voos;
    }

    getVooByID(id: number): Voo | undefined {
        return this.voos.find((voo) => voo.idVoo === id);
    }

    addVoo(VooToAdd: Voo): void {
        const VooExists = this.voos.find((Voo) => Voo.idVoo === VooToAdd.idVoo)
        if (VooExists === undefined) {
            this.voos.push(VooToAdd);
        }
        else{
            console.log("Voo já cadastrado");
            
        }
    }

    deleteVoo(idToRemove: number): void {
        try {
            this.voos = this.voos.filter(
                (voo) => voo.idVoo !== idToRemove
            );
        } catch (error) {
            throw new Error('Não foi possivel deletar o Voo.');
        }
    }

    updateVoo(nameToUpdate: number, updatedVoo: Voo): void {
        const updateIndex = this.voos.findIndex(
            (voo) => voo.idVoo === nameToUpdate
        );

        try {
            if (updateIndex >= 0) {
                this.voos[updateIndex] = updatedVoo;
            } else {
            }
        } catch (error) {
            throw new Error('Não foi possível atualizar o Voo');
        }
    }
}
