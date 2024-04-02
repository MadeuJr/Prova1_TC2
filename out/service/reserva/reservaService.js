"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaService = void 0;
class ReservaService {
    constructor(vooService, passageiroService) {
        this._reservas = [];
        this._vooService = vooService;
        this._passageiroService = passageiroService;
    }
    checkPassageiroAndVoo(reservaCheck) {
        const passengerExists = this._passageiroService.getPassageiroByCPF(reservaCheck.cpfPassageiro);
        const flightExists = this._vooService.getVooByID(reservaCheck.idVoo);
        return passengerExists !== undefined && flightExists !== undefined;
    }
    getreservas() {
        return this._reservas;
    }
    getReservaByID(id) {
        return this._reservas.find((Reserva) => Reserva.idReserva === id);
    }
    addReserva(reservaToAdd) {
        const ReservaExists = this._reservas.find((Reserva) => Reserva.idReserva === reservaToAdd.idReserva);
        try {
            if (this.checkPassageiroAndVoo(reservaToAdd) === true &&
                ReservaExists === undefined) {
                this._reservas.push(reservaToAdd);
            }
            else if (this.checkPassageiroAndVoo(reservaToAdd) === false) {
                throw new Error('Error Passageiro e Voo');
            }
            else {
                throw new Error('Error Reserva');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                if (error.message === 'Error Passageiro e Voo') {
                    console.error('Passageiro ou voo da reserva informada não foram encontrados');
                }
                else if (error.message === 'Error Reserva') {
                    console.error('Reserva já cadastrada');
                }
                else {
                    // Lidar com outros erros não esperados
                    console.error('Ocorreu um erro inesperado:', error.message);
                }
            }
        }
    }
    deleteReserva(idToRemove) {
        const removalSearch = this._reservas.findIndex((Reserva) => Reserva.idReserva === idToRemove);
        try {
            if (removalSearch > -1) {
                this._reservas = this._reservas.filter((Reserva) => Reserva.idReserva !== idToRemove);
            }
            else {
                throw new Error('Id nao encontrado!');
            }
        }
        catch (error) {
            console.error('Id Não encontrado para exclusão não encontrado!');
        }
    }
    updateReserva(idToUpdate, updatedReserva) {
        const updateIndex = this._reservas.findIndex((Reserva) => Reserva.idReserva === idToUpdate);
        try {
            if (updateIndex >= 0 || updatedReserva === this._reservas[updateIndex]) {
                this._reservas[updateIndex] = updatedReserva;
            }
            else {
                throw new Error('Id nao encontrado!');
            }
        }
        catch (error) {
            console.error('Id não encontrado para atualização não encontrado!');
        }
    }
}
exports.ReservaService = ReservaService;
