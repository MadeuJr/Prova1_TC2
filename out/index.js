"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aeroporto_1 = require("./model/aeroporto/aeroporto");
const companhiaAerea_1 = require("./model/companhiaAerea/companhiaAerea");
const contaMilha_1 = require("./model/contaMilha/contaMilha");
const statusEnun_1 = require("./model/contaMilha/statusEnun");
const embarque_1 = require("./model/embarque/embarque");
const enumCartaoMilha_1 = require("./model/passageiro/enumCartaoMilha");
const enumStatusPassageiro_1 = require("./model/passageiro/enumStatusPassageiro");
const passageiro_1 = require("./model/passageiro/passageiro");
const reserva_1 = require("./model/reserva/reserva");
const voo_1 = require("./model/voo/voo");
const aeroportoService_1 = require("./service/aeroporto/aeroportoService");
const companhiaAereaService_1 = require("./service/companhiaAerea/companhiaAereaService");
const contaMilhaService_1 = require("./service/contaMilha/contaMilhaService");
const embarqueService_1 = require("./service/embarque/embarqueService");
const passageiroService_1 = require("./service/passageiro/passageiroService");
const reservaService_1 = require("./service/reserva/reservaService");
const vooService_1 = require("./service/voo/vooService");
const aeroportoService = new aeroportoService_1.AeroportoService();
const companhiaAereaService = new companhiaAereaService_1.CompanhiaAereaService();
const contaMilhaService = new contaMilhaService_1.ContaMilhaService();
const passageirosService = new passageiroService_1.PassageiroService();
const vooService = new vooService_1.VooService();
const reservaService = new reservaService_1.ReservaService(vooService, passageirosService);
const embarqueService = new embarqueService_1.EmbarqueService(vooService);
const aeroporto1 = new aeroporto_1.Aeroporto('SYD', // sigla
'Sydney Kingsford Smith International Airport', // nome
'Australia', // pais
25.5 // taxa
);
const aeroporto2 = new aeroporto_1.Aeroporto('JFK', // sigla
'John F. Kennedy International Airport', // nome
'United States', // pais
30.0 // taxa
);
const aeroporto3 = new aeroporto_1.Aeroporto('LHR', // sigla
'London Heathrow Airport', // nome
'United Kingdom', // pais
20.0 // taxa
);
const aeroporto4 = new aeroporto_1.Aeroporto('CDG', // sigla
'Charles de Gaulle Airport', // nome
'France', // pais
22.5 // taxa
);
console.log('Criando e adicionando os aeroportos de 1 a 4');
aeroportoService.addAeroporto(aeroporto1);
aeroportoService.addAeroporto(aeroporto2);
aeroportoService.addAeroporto(aeroporto3);
aeroportoService.addAeroporto(aeroporto4);
console.log('***************************************');
console.log('Aeroportos após cadastro:');
console.log(aeroportoService.getAeroportos());
console.log('***************************************');
console.log('Exclusão aeroporto 2');
aeroportoService.deleteAeroporto(aeroporto2.nome);
console.log(aeroportoService.getAeroportos());
const companhiaAerea1 = new companhiaAerea_1.CompanhiaAerea('Qantas Airways', 'QF');
const companhiaAerea2 = new companhiaAerea_1.CompanhiaAerea('American Airlines', 'AA');
const companhiaAerea3 = new companhiaAerea_1.CompanhiaAerea('British Airways', 'BA');
const companhiaAerea4 = new companhiaAerea_1.CompanhiaAerea('Air France', 'AF');
const companhiaAerea5 = new companhiaAerea_1.CompanhiaAerea('Lufthansa', 'LH');
const companhiaAerea6 = new companhiaAerea_1.CompanhiaAerea('Emirates', 'EK');
console.log('***************************************');
console.log('Criando e adicionando companhias aéreas');
companhiaAereaService.addCompanhiaAerea(companhiaAerea1);
companhiaAereaService.addCompanhiaAerea(companhiaAerea2);
companhiaAereaService.addCompanhiaAerea(companhiaAerea3);
companhiaAereaService.addCompanhiaAerea(companhiaAerea4);
companhiaAereaService.addCompanhiaAerea(companhiaAerea5);
companhiaAereaService.addCompanhiaAerea(companhiaAerea6);
console.log(companhiaAereaService.getCompanhias());
console.log('***************************************');
console.log('Excluindo companhia 2 e atualizando companhia 5');
companhiaAereaService.deleteCompanhiaAerea(companhiaAerea2.nome);
const companhiaAereaAtualiza = new companhiaAerea_1.CompanhiaAerea('Mudando Nome', 'LH');
companhiaAereaService.updateCompanhiaAerea(companhiaAerea5.nome, companhiaAereaAtualiza);
console.log(companhiaAereaService.getCompanhias());
const passageiro1 = new passageiro_1.Passageiro('11111111111', 'John Doe', '1234567890', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro2 = new passageiro_1.Passageiro('22222222222', 'Jane Doe', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro3 = new passageiro_1.Passageiro('33333333333', 'Bob Smith', '1234567890', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro4 = new passageiro_1.Passageiro('44444444444', 'Alice Johnson', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro5 = new passageiro_1.Passageiro('55555555555', 'Charlie Brown', '1234567890', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro6 = new passageiro_1.Passageiro('66666666666', 'David Williams', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro7 = new passageiro_1.Passageiro('77777777777', 'Mary Wilson', '1234567890', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro8 = new passageiro_1.Passageiro('88888888888', 'James Taylor', '0987654321', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro9 = new passageiro_1.Passageiro('99999999999', 'Elizabeth Baker', '1234567890', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro10 = new passageiro_1.Passageiro('10101010101', 'Michael Davis', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro11 = new passageiro_1.Passageiro('20202020202', 'William Martinez', '1234567890', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro12 = new passageiro_1.Passageiro('30303030303', 'Emily Garcia', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro13 = new passageiro_1.Passageiro('40404040404', 'Daniel Rodriguez', '1234567890', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro14 = new passageiro_1.Passageiro('50505050505', 'Hannah Clark', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro15 = new passageiro_1.Passageiro('60606060606', 'Ava Lewis', '1234567890', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro16 = new passageiro_1.Passageiro('70707070707', 'James Thompson', '0987654321', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro17 = new passageiro_1.Passageiro('80808080808', 'Samantha Allen', '1234567890', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro18 = new passageiro_1.Passageiro('90909090909', 'Tyler Wright', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro19 = new passageiro_1.Passageiro('12345678910', 'Ethan Young', '1234567890', enumCartaoMilha_1.CartaoMilha.SIM, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
const passageiro20 = new passageiro_1.Passageiro('23456789012', 'Olivia Scott', '0987654321', enumCartaoMilha_1.CartaoMilha.NAO, enumStatusPassageiro_1.StatusPassageiro.DESEMBARCADO);
console.log('***************************************');
console.log('Criando e adicionando passageiros');
passageirosService.addPassageiro(passageiro1);
passageirosService.addPassageiro(passageiro2);
passageirosService.addPassageiro(passageiro3);
passageirosService.addPassageiro(passageiro4);
passageirosService.addPassageiro(passageiro5);
passageirosService.addPassageiro(passageiro6);
passageirosService.addPassageiro(passageiro7);
passageirosService.addPassageiro(passageiro8);
passageirosService.addPassageiro(passageiro9);
passageirosService.addPassageiro(passageiro10);
passageirosService.addPassageiro(passageiro11);
passageirosService.addPassageiro(passageiro12);
passageirosService.addPassageiro(passageiro13);
passageirosService.addPassageiro(passageiro14);
passageirosService.addPassageiro(passageiro15);
passageirosService.addPassageiro(passageiro16);
passageirosService.addPassageiro(passageiro17);
passageirosService.addPassageiro(passageiro18);
passageirosService.addPassageiro(passageiro19);
passageirosService.addPassageiro(passageiro20);
console.log(passageirosService.getpassageiros());
console.log('***************************************');
console.log('Criando e adicionando companhias voos');
const voos = [
    new voo_1.Voo(new Date('2022-01-01T10:00:00'), 500, 1),
    new voo_1.Voo(new Date('2022-01-02T15:30:00'), 1200, 2),
    new voo_1.Voo(new Date('2022-01-03T08:45:00'), 800, 3),
    new voo_1.Voo(new Date('2022-01-04T13:15:00'), 700, 4),
    new voo_1.Voo(new Date('2022-01-05T21:00:00'), 900, 5),
];
for (const voo of voos) {
    vooService.addVoo(voo);
}
console.log(vooService.getVoos());
console.log('***************************************');
console.log('Criando e adicionando embarques');
const embarque1 = new embarque_1.Embarque(1, new Date(), 1, 1);
const embarque2 = new embarque_1.Embarque(2, new Date(), 2, 2);
const embarque3 = new embarque_1.Embarque(3, new Date(), 3, 3);
const embarque4 = new embarque_1.Embarque(4, new Date(), 4, 4);
const embarque5 = new embarque_1.Embarque(5, new Date(), 5, 5);
embarqueService.addEmbarque(embarque1);
embarqueService.addEmbarque(embarque2);
embarqueService.addEmbarque(embarque3);
embarqueService.addEmbarque(embarque4);
embarqueService.addEmbarque(embarque5);
console.log(embarqueService.getembarques());
console.log('***************************************');
console.log('Criando reservas ');
const reservas = [
    new reserva_1.Reserva(1, 1, new Date(), '11111111111'),
    new reserva_1.Reserva(2, 2, new Date(), '22222222222'),
    new reserva_1.Reserva(3, 3, new Date(), '33333333333'),
    new reserva_1.Reserva(4, 4, new Date(), '44444444444'),
    new reserva_1.Reserva(5, 5, new Date(), '55555555555'),
    new reserva_1.Reserva(6, 6, new Date(), '55555555555'),
];
for (const reserva of reservas) {
    reservaService.addReserva(reserva);
}
console.log(reservaService.getreservas());
console.log('***************************************');
console.log('Usando metodos das reservas\n');
const reserva1 = reservaService.getReservaByID(1);
reserva1 === null || reserva1 === void 0 ? void 0 : reserva1.reservar();
reserva1 === null || reserva1 === void 0 ? void 0 : reserva1.alterarReserva();
reserva1 === null || reserva1 === void 0 ? void 0 : reserva1.pagarReserva();
reserva1 === null || reserva1 === void 0 ? void 0 : reserva1.cancelarReserva();
console.log('***************************************');
console.log('Usando metodos do embarque\n');
embarque1.iniciarCheckIn();
embarque1.embarcarPassageiro(passageiro1);
embarque1.atrasarVoo();
embarque1.pararCheckIn();
embarque1.finalizarVoo();
console.log('***************************************');
console.log('Criando contas milhas');
const contaMilha1 = new contaMilha_1.ContaMilha(passageiro1, 1, 1000, statusEnun_1.Status.ATIVO);
const contaMilha2 = new contaMilha_1.ContaMilha(passageiro2, 2, 2000, statusEnun_1.Status.ATIVO);
contaMilhaService.addContaMilha(contaMilha1);
contaMilhaService.addContaMilha(contaMilha2);
console.log(contaMilhaService.getContasMilhas());
