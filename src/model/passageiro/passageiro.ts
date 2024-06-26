import { ContaMilhaService } from '../../service/contaMilha/contaMilhaService';
import { CartaoMilha } from './enumCartaoMilha';

export class Passageiro {
    private _cpf: string;
    private _nome: string;
    private _cc: string;
    private _cartaoMilha: CartaoMilha;
    private _status: string;

    constructor(
        cpf: string,
        nome: string,
        cc: string,
        cartaoMilha: CartaoMilha,
        status: string
    ) {
        this._cpf = cpf;
        this._nome = nome;
        this._cc = cc;
        this._cartaoMilha = cartaoMilha;
        this._status = status;
    }

    /**
     * Getter cpf
     * @return {string}
     */
    public get cpf(): string {
        return this._cpf;
    }

    /**
     * Getter nome
     * @return {string}
     */
    public get nome(): string {
        return this._nome;
    }

    /**
     * Getter cc
     * @return {string}
     */
    public get cc(): string {
        return this._cc;
    }

    /**
     * Getter cartaoMilha
     * @return {string}
     */
    public get cartaoMilha(): CartaoMilha {
        return this._cartaoMilha;
    }

    /**
     * Getter status
     * @return {string}
     */
    public get status(): string {
        return this._status;
    }

    /**
     * Setter cpf
     * @param {string} value
     */
    public set cpf(value: string) {
        this._cpf = value;
    }

    /**
     * Setter nome
     * @param {string} value
     */
    public set nome(value: string) {
        this._nome = value;
    }

    /**
     * Setter cc
     * @param {string} value
     */
    public set cc(value: string) {
        this._cc = value;
    }

    /**
     * Setter cartaoMilha
     * @param {string} value
     */
    public set cartaoMilha(value: CartaoMilha) {
        this._cartaoMilha = value;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public set status(value: string) {
        this._status = value;
    }

    creditoMilha(contaMilhaService: ContaMilhaService, valor: number) {
        const creditarMilhas = contaMilhaService.getContaMilhaByPassageiroID(
            this._cpf
        );
        if (this._cartaoMilha === 0) {
            console.log('O Cartão do passageiro não credita milhas');
        } else if (creditarMilhas !== undefined) {
            creditarMilhas.totalMilhas += valor;
            contaMilhaService.updateContaMilha(this._cpf, creditarMilhas);
        } else {
            console.log(
                'O Cartão do passageiro não credita milhas ou ele não tem uma Conta de milhas'
            );
        }
    }

    consumoMilha(contaMilhaService: ContaMilhaService, valor: number) {
        const consumirMilhas = contaMilhaService.getContaMilhaByPassageiroID(
            this._cpf
        );
        if (this._cartaoMilha === 0) {
            console.log('O Cartão do passageiro não credita milhas');
        } else if (consumirMilhas !== undefined) {
            consumirMilhas.totalMilhas -= valor;
            contaMilhaService.updateContaMilha(this._cpf, consumirMilhas);
        } else {
            console.log('O Passageiro não tem uma Conta de Milhas');
        }
    }
}
