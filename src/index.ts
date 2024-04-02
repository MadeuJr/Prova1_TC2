import { Aeroporto } from './model/aeroporto/aeroporto';
import { CompanhiaAerea } from './model/companhiaAerea/companhiaAerea';
import { ContaMilha } from './model/contaMilha/contaMilha';
import { Status } from './model/contaMilha/statusEnun';
import { Embarque } from './model/embarque/embarque';
import { CartaoMilha } from './model/passageiro/enumCartaoMilha';
import { StatusPassageiro } from './model/passageiro/enumStatusPassageiro';
import { Passageiro } from './model/passageiro/passageiro';
import { Reserva } from './model/reserva/reserva';
import { Voo } from './model/voo/voo';
import { AeroportoService } from './service/aeroporto/aeroportoService';
import { CompanhiaAereaService } from './service/companhiaAerea/companhiaAereaService';
import { ContaMilhaService } from './service/contaMilha/contaMilhaService';
import { EmbarqueService } from './service/embarque/embarqueService';
import { PassageiroService } from './service/passageiro/passageiroService';
import { ReservaService } from './service/reserva/reservaService';
import { VooService } from './service/voo/vooService';

const aeroportoService = new AeroportoService();
const companhiaAereaService = new CompanhiaAereaService();
const contaMilhaService = new ContaMilhaService();
const passageirosService = new PassageiroService();
const vooService = new VooService();
const reservaService = new ReservaService(vooService, passageirosService);
const embarqueService = new EmbarqueService(vooService);

const aeroporto1 = new Aeroporto(
    'SYD', // sigla
    'Sydney Kingsford Smith International Airport', // nome
    'Australia', // pais
    25.5 // taxa
);

const aeroporto2 = new Aeroporto(
    'JFK', // sigla
    'John F. Kennedy International Airport', // nome
    'United States', // pais
    30.0 // taxa
);

const aeroporto3 = new Aeroporto(
    'LHR', // sigla
    'London Heathrow Airport', // nome
    'United Kingdom', // pais
    20.0 // taxa
);

const aeroporto4 = new Aeroporto(
    'CDG', // sigla
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

const companhiaAerea1 = new CompanhiaAerea('Qantas Airways', 'QF');

const companhiaAerea2 = new CompanhiaAerea('American Airlines', 'AA');

const companhiaAerea3 = new CompanhiaAerea('British Airways', 'BA');

const companhiaAerea4 = new CompanhiaAerea('Air France', 'AF');

const companhiaAerea5 = new CompanhiaAerea('Lufthansa', 'LH');

const companhiaAerea6 = new CompanhiaAerea('Emirates', 'EK');

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

const companhiaAereaAtualiza = new CompanhiaAerea('Mudando Nome', 'LH');

companhiaAereaService.updateCompanhiaAerea(
    companhiaAerea5.nome,
    companhiaAereaAtualiza
);

console.log(companhiaAereaService.getCompanhias());

const passageiro1 = new Passageiro(
    '11111111111',
    'John Doe',
    '1234567890',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro2 = new Passageiro(
    '22222222222',
    'Jane Doe',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro3 = new Passageiro(
    '33333333333',
    'Bob Smith',
    '1234567890',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro4 = new Passageiro(
    '44444444444',
    'Alice Johnson',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro5 = new Passageiro(
    '55555555555',
    'Charlie Brown',
    '1234567890',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro6 = new Passageiro(
    '66666666666',
    'David Williams',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro7 = new Passageiro(
    '77777777777',
    'Mary Wilson',
    '1234567890',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro8 = new Passageiro(
    '88888888888',
    'James Taylor',
    '0987654321',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro9 = new Passageiro(
    '99999999999',
    'Elizabeth Baker',
    '1234567890',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro10 = new Passageiro(
    '10101010101',
    'Michael Davis',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro11 = new Passageiro(
    '20202020202',
    'William Martinez',
    '1234567890',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro12 = new Passageiro(
    '30303030303',
    'Emily Garcia',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro13 = new Passageiro(
    '40404040404',
    'Daniel Rodriguez',
    '1234567890',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro14 = new Passageiro(
    '50505050505',
    'Hannah Clark',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro15 = new Passageiro(
    '60606060606',
    'Ava Lewis',
    '1234567890',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro16 = new Passageiro(
    '70707070707',
    'James Thompson',
    '0987654321',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro17 = new Passageiro(
    '80808080808',
    'Samantha Allen',
    '1234567890',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro18 = new Passageiro(
    '90909090909',
    'Tyler Wright',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

const passageiro19 = new Passageiro(
    '12345678910',
    'Ethan Young',
    '1234567890',
    CartaoMilha.SIM,
    StatusPassageiro.DESEMBARCADO
);

const passageiro20 = new Passageiro(
    '23456789012',
    'Olivia Scott',
    '0987654321',
    CartaoMilha.NAO,
    StatusPassageiro.DESEMBARCADO
);

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

const voos: Voo[] = [
    new Voo(new Date('2022-01-01T10:00:00'), 500, 1),
    new Voo(new Date('2022-01-02T15:30:00'), 1200, 2),
    new Voo(new Date('2022-01-03T08:45:00'), 800, 3),
    new Voo(new Date('2022-01-04T13:15:00'), 700, 4),
    new Voo(new Date('2022-01-05T21:00:00'), 900, 5),
];

for (const voo of voos) {
    vooService.addVoo(voo);
}

console.log(vooService.getVoos());

console.log('***************************************');
console.log('Criando e adicionando embarques');

const embarque1 = new Embarque(1, new Date(), 1, 1);
const embarque2 = new Embarque(2, new Date(), 2, 2);
const embarque3 = new Embarque(3, new Date(), 3, 3);
const embarque4 = new Embarque(4, new Date(), 4, 4);
const embarque5 = new Embarque(5, new Date(), 5, 5);

embarqueService.addEmbarque(embarque1);
embarqueService.addEmbarque(embarque2);
embarqueService.addEmbarque(embarque3);
embarqueService.addEmbarque(embarque4);
embarqueService.addEmbarque(embarque5);

console.log(embarqueService.getembarques());

console.log('***************************************');
console.log('Criando reservas ');

const reservas: Reserva[] = [
    new Reserva(1, 1, new Date(), '11111111111'),
    new Reserva(2, 2, new Date(), '22222222222'),
    new Reserva(3, 3, new Date(), '33333333333'),
    new Reserva(4, 4, new Date(), '44444444444'),
    new Reserva(5, 5, new Date(), '55555555555'),
    new Reserva(6, 6, new Date(), '55555555555'),
];

for (const reserva of reservas) {
    reservaService.addReserva(reserva);
}

console.log(reservaService.getreservas());

console.log('***************************************');
console.log('Usando metodos das reservas\n');

const reserva1 = reservaService.getReservaByID(1);

reserva1?.reservar()
reserva1?.alterarReserva();
reserva1?.pagarReserva();
reserva1?.cancelarReserva();

console.log('***************************************');
console.log('Usando metodos do embarque\n');

embarque1.iniciarCheckIn();
embarque1.embarcarPassageiro(passageiro1);
embarque1.atrasarVoo();
embarque1.pararCheckIn();
embarque1.finalizarVoo();

console.log('***************************************');
console.log('Criando contas milhas');

const contaMilha1 = new ContaMilha(passageiro1, 1, 1000, Status.ATIVO);
const contaMilha2 = new ContaMilha(passageiro2, 2, 2000, Status.ATIVO);

contaMilhaService.addContaMilha(contaMilha1);
contaMilhaService.addContaMilha(contaMilha2);

console.log(contaMilhaService.getContasMilhas());


