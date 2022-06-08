export type transaction ={
    value:number,
    date:Date,
    description:string
}

export type acoount={
    name:string,
    cpf:string,
    dateOfBirth:Date,
    balance:number,
    statement:Array<transaction>
}