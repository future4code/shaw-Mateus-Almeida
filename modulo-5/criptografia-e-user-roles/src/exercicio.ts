/*
A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 

Abaixo, há o exemplo de uso da função de *hash*

import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);

 a) O que são os round e salt? Que valores são recomendados 
 para o round? Que valor você usou? Por quê?
   r)
   Um salt é, basicamente, uma cadeia de caracteres aleatória 
   concatenada com uma senha, passphrase ou arquivo antes de efetuar 
   uma operação de hash. O salt pode ser anexado antes ou depois desses 
   dados, e o uso do salt permite que o hash gerado seja completamente 
   diferente toda vez que for gerado, mesmo que a senha seja idêntica



   --  nao consegui entender o round e tanbem nao achei nos slaides 
*/

import * as bcrypt from "bcryptjs";


 const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

 const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }
