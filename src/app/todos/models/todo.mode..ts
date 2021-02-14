
export class Todo {

    public id: number
    public completado: boolean
    public texto: string

    constructor(texto: string) {
        this.id = new Date().getTime()
        this.completado = false
        this.texto = texto
    }
}