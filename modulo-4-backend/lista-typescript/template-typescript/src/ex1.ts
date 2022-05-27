/* - Exercício 1
    
    Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento 
    (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato
- Exercício 1
    
    Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). 
    A função deve separar o dia,
     o mês e ano e retornar uma `string` no seguinte formato

     */



function pessoa(name:string, date:string){
    const dateArray = date.split(' ')
    return ` ola me chamo ${name}, nasci no dia ${dateArray[0]} do mẽs de ${dateArray[1]} do ano de ${dateArray[2]}`
}
console.log(pessoa('seean', '05 março 1998'));
