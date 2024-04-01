import { Reserva } from '../../model/reserva/reserva';
import { PassageiroService } from '../passageiro/passageiroService';
import { VooService } from '../voo/vooService';


export class ReservaService {
    private _reservas: Reserva[] = [];
    private _vooService: VooService;
    private _passageiroService: PassageiroService
    
    
    constructor(vooService: VooService, passageiroService: PassageiroService) {
        this._vooService = vooService;
        this._passageiroService = passageiroService;
    }

    getreservas(): Reserva[] {
        return this._reservas;
    }

    getReservaByID(id: number): Reserva | undefined {
        return this._reservas.find((Reserva) => Reserva.idReserva === id);
    }

    addReserva(ReservaToAdd: Reserva): void {
        const ReservaExists = this._reservas.find((Reserva) => Reserva.idReserva === ReservaToAdd.idReserva)
        //TODO Fazer a verificação se o CPF e o ID do VOO estão cadastrados para poder inserir no Array
        if (ReservaExists === undefined) {
            this._reservas.push(ReservaToAdd);
        }
        else{
            console.log("Reserva já cadastrada");
            
        }
    }

    deleteReserva(idToRemove: number): void {
        try {
            this._reservas = this._reservas.filter(
                (Reserva) => Reserva.idReserva !== idToRemove
            );
        } catch (error) {
            throw new Error('Não foi possivel deletar o Reserva.');
        }
    }

    updateReserva(nameToUpdate: number, updatedReserva: Reserva): void {
        const updateIndex = this._reservas.findIndex(
            (Reserva) => Reserva.idReserva === nameToUpdate
        );

        try {
            if (updateIndex >= 0) {
                this._reservas[updateIndex] = updatedReserva;
            } else {
            }
        } catch (error) {
            throw new Error('Não foi possível atualizar o Reserva');
        }
    }
}
