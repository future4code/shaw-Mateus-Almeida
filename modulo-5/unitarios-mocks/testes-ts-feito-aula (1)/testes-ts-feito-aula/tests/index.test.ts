import { Character } from "../src";

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false;
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true;
};
/*
a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "". 
*/
test("Should return false for empty name", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(false);
});
/*
b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 
*/
test("Should return false for life 0", () => {
    const result = validateCharacter({
        name: "Scorpion",
        life: 0,
        strength: 110,
        defense: 500,
    });

    expect(result).toBe(false);
});
/*
c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero. 
*/
test("testando a força dos character", () => {
    const result = validateCharacter({
        name: "mario",
        life: 1500,
        strength: 0,
        defense: 500,
    });
    expect(result).toBe(false)
});
/*
d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero. 
*/
test("testando a defesa dos character", () => {
    const result = validateCharacter({
        name: "luigi",
        life: 1500,
        strength: 550,
        defense: 0,
    });
    expect(result).toBe(false)
});

/*
e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
*/
test("testando algum valor negativo dos character", () => {
    const result = validateCharacter({
        name: "luigi",
        life: 1500,
        strength: 550,
        defense: -10,
    });
    expect(result).toBe(false)
});
/*
f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas
*/
test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
        name: "Scorpion",
        life: 1500,
        strength: 300,
        defense: 500,
    });

    expect(result).toBe(true);
});

//exercicio 3
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};
/*
Antes de começar a criar os testes dessas funções, vamos nos relemebrar dos Mocks. 

Eles são muito importantes quando vamos realizar testes unitários, pois permitem que 
realizemos o teste sem utilizar nenhuma implementação das dependências, garantindo que 
ele seja isolado e específico para a função/classe que estamos tentando testar.

Para criar um  Mock no Jest, temos que usar a função `jest.fn`, como mostrado abaixo:
*/
test("Showing jest.fn", () => {
    const mock = jest.fn(() => {
        const user = {
            name: "Astrodev",
            age: 29
        }
        return user
    })
})
/*
a. De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique
r:acredito que o perfomAttack , pela suas regras o mock se encaixaria melhor 
*/
/* b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento*/
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return true
    });
});
// toda vez que criar um mock tenho que usar a funcao reservada jest.fn
/* c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento*/
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return false
    });
});
/*
a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida.
 Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número
  de vezes em que ela foi chamada, quantas vezes ela retornou.
*/
test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
        return true;
    });

    const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: 600,
    };

    const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
});
/* 
Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a 
função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e 
quantas vezes ela retornou.   
*/


/*
             //entender porque esse esta dando error e quebrando o codigo 
test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
        return false;
    });

    const attacker: Character = {
        name: "",
        life: 1500,
        defense: 200,
        strength: 600,
    };

    const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
    };

    try {
        performAttack(attacker, defender, validatorMock as any);
    } catch (err: any) {
        expect(err.message).toBe("Invalid character");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
    }
});
*/