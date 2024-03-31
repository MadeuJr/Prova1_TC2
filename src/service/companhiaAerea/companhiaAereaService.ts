import { CompanhiaAerea } from "../../model/companhiaAerea/companhiaAerea"

export class CompanhiaAereaService {
    private companhias: CompanhiaAerea[] = [];

    getCompanhias(): CompanhiaAerea[] {
        return this.companhias;
    }

    getCompanhiaAereaByName(name: string): CompanhiaAerea | undefined {
        return this.companhias.find((CompanhiaAerea) => CompanhiaAerea.nome === name);
    }

    addCompanhiaAerea(CompanhiaAereaToAdd: CompanhiaAerea): void {
        this.companhias.push(CompanhiaAereaToAdd);
    }

    deleteCompanhiaAerea(nameToRemove: string): void {
       try {
         this.companhias = this.companhias.filter(
             (CompanhiaAerea) => CompanhiaAerea.nome !== nameToRemove
         );
       } catch (error) {
        throw new Error('Não foi possivel deletar a Companhia Aerea.');
       }
    }

    updateCompanhiaAerea(nameToUpdate: string, updatedCompanhiaAerea: CompanhiaAerea): void {
        const updateIndex = this.companhias.findIndex(
            (CompanhiaAerea) => CompanhiaAerea.nome === nameToUpdate
        );
            
       try {
         if (updateIndex >= 0) {
             this.companhias[updateIndex] = updatedCompanhiaAerea;
         } else {
             
         }
       } catch (error) {
        throw new Error('Não foi possível atualizar a Companhia Aerea');
       }
    }
}