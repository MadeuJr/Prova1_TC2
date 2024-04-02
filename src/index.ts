import { AeroportoService } from "./service/aeroporto/aeroportoService";
import { CompanhiaAereaService } from "./service/companhiaAerea/companhiaAereaService";
import { ContaMilhaService } from "./service/contaMilha/contaMilhaService";
import { EmbarqueService } from "./service/embarque/embarqueService";
import { PassageiroService } from "./service/passageiro/passageiroService";
import { ReservaService } from "./service/reserva/reservaService";
import { VooService } from "./service/voo/vooService";

const aeroportoService = new AeroportoService();
const companhiaAereaService = new CompanhiaAereaService();
const contaMilhaService = new ContaMilhaService();
const embarqueService = new EmbarqueService();
const passageirosService = new PassageiroService();
const vooService = new VooService();
const reservaService = new ReservaService(vooService, passageirosService);

