export class Passageiro {
    private _cpf: string;
    private _nome: string;
    private _cc: string;
    private _cartaoMilha: string;
    private _status: string;

    constructor(
        cpf: string,
        nome: string,
        cc: string,
        cartaoMilha: string,
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
    public get cartaoMilha(): string {
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
    public set cartaoMilha(value: string) {
        this._cartaoMilha = value;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public set status(value: string) {
        this._status = value;
    }

    //TODO fazer a função que mexe com as milhas dos passageiros

    creditoMilha(params: any) {}

    consumoMilha(params: any) {}
}
