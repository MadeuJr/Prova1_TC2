import { Embarque } from "../../model/embarque/embarque"

export class EmbarqueService {
    private embarques: Embarque[] = [];

    getembarques(): Embarque[] {
        return this.embarques;
    }

    getEmbarqueByName(name: string): Embarque | undefined {
        return this.embarques.find((Embarque) => Embarque.nome === name);
    }

    addEmbarque(EmbarqueToAdd: Embarque): void {
        this.embarques.push(EmbarqueToAdd);
    }

    deleteEmbarque(nameToRemove: string): void {
       try {
         this.embarques = this.embarques.filter(
             (Embarque) => Embarque.nome !== nameToRemove
         );
       } catch (error) {
        throw new Error('Não foi possivel deletar a Companhia Aerea.');
       }
    }

    updateEmbarque(nameToUpdate: string, updatedEmbarque: Embarque): void {
        const updateIndex = this.embarques.findIndex(
            (Embarque) => Embarque.nome === nameToUpdate
        );
            
       try {
         if (updateIndex >= 0) {
             this.embarques[updateIndex] = updatedEmbarque;
         } else {
             
         }
       } catch (error) {
        throw new Error('Não foi possível atualizar a Companhia Aerea');
       }
    }
}