CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

--  usei o float para poder recber numeros nao inteiros ,  usamos o vachar para passar caracteres e um primary key para acessar o item 
-- o name usou um vachar para passar carcteres e um not null para falar que ele obrigatoriamente nao pode ficar nulo
-- o salario usei um float para receber salario inteiro ou com ponto flutuante e nao pode ser nullo
--  no bith recebeu data e nao pode ficar nullo 
-- e no geder usei um vachar para receber caracteres e falei que ele nao pode ser nulo
-- 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "gloria pires",
  1200000,
  "1964-08-23", 
  "female"
);
 -- acho que o erro veio por causa do salario com . 
INSERT INTO Actor (id, name, salary ,birth_date, gender )
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- o  da fernanda nao estava indo porque faltava o birth e o gender 
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  " mateus almeida",
  400000,
  "1949-04-18", 
  "male"
);
-- esse nao foi por causa que falta o nome 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
-- o data estava no formato sem ser string 
-- f
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "hayden cristensen",
  71933231233.83,
  "1981-05-16", 
  "female"
);
-- 3
-- me retornou toda a tabela dos atores
  -- SELECT * FROM Actor
 -- dessa segunda forma so me retonou o ide e o salario dos atores
   SELECT id, salary from Actor;
   SELECT id, name from Actor WHERE gender = "male";
  -- fez me retorna todas as mulheres
SELECT id, name from Actor WHERE gender = "female";
-- b
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
 -- ///////////////////////////////////////////////// aprofundamento sql /////////////////////////////////////////////////
 -- a/ o alter table e tirando a coluna salary
 -- b/ esta alterando a tabela e mudando  para que o varchar so aceite 6 caracteres
 -- c/ esta auterando a tabela do genero  e falando que genero recebera ate 255 caracteres

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
-- 2 /
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003";
-- b /
SELECT upper(name) FROM Actor
WHERE name  = "juliana paes";

SELECT lower(name) FROM Actor
WHERE name  = "juliana paes";

Select * from Actor ;
-- C/
	UPDATE Actor 
	SET name = "NYVI STEPHAN" , salary = 2341234123 , birth_date ="1998-08-25", gender ="famale"
	WHERE id = "005";
    -- d / ele fala que cria e da certo porém naop aparece nada na tabela 
 UPDATE Actor 
	SET name = " STEPHAN" , salary = 2341234123 , birth_date ="1998-08-25", gender ="male"
	WHERE id = "015";
 -- 3 
 --  a /
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
-- b /
-- nao consgio deletar porque tenho que desabiliotar o modo de segurança
	DELETE FROM Actor
	WHERE
	gender = "male" AND
	salary > 1000000;
 -- 4 /
 -- a/
 