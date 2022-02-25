# LEARN SQL Language
##### REMEMBER THE ; !!!

## RODANDO O PROJETO
- docker run --name analysisManual -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

- docker start analysisManual

- psql -h localhost -p 5433 -U postgres

## COMANDOS DE SQL
#### CREATE a new TABLE
- CREATE TABLE "teachers" (id bigserial, first_name varchar(25), last_name varchar(50), school varchar(50), hire_date date, salary numeric);

#### Single INSERT
- INSERT INTO "teachers" (first_name, last_name, school, hire_date, salary) VALUES ('Janet', 'Smith', 'F.D. Roosevelt HS', '2011-10-30', 36200);

#### Multiple Inserts
- INSERT INTO "teachers" (first_name, last_name, school, hire_date, salary) VALUES ('Lee', 'Reynolds', 'F.D. Roosevelt HS', '1993-05-22', 65000), ('Samuel', 'Cole', 'Myers Middle School', '2005-08-01', 43500), ('Samantha', 'Bush', 'Myers Middle School', '2011-10-30', 36200), ('Betty', 'Diaz', 'Myers Middle School', '2005-08-30', 43500), ('Kathleen', 'Roush', 'F.D. Roosevelt HS', '2010-10-22', 38500);

#### ALTER TABLE Rename Column Name
- ALTER TABLE species RENAME COLUMN common_species_name TO common_name;

#### SELECT ALL
- SELECT * FROM teachers;

#### SELECT COLUMN(s)
- SELECT first_name, last_name FROM teachers;

#### SELECT DISTINCT
Distinct elimina dados duplicados e nos mostra apenas valores unicos.

- SELECT DISTINCT school FROM teachers;

|        school        |
|----------------------|
|  Myers Middle School |
|  F.D. Roosevelt HS   |


##### SELECT DISTINCT de Multiplas Colunas
- SELECT DISTINCT school, salary FROM teachers;

|       school        | salary |
|---------------------|--------|
| Myers Middle School |  36200 |
| F.D. Roosevelt HS   |  65000 |
| Myers Middle School |  43500 |
| F.D. Roosevelt HS   |  38500 |
| F.D. Roosevelt HS   |  36200 |

Ao fazer SELECT DISTINCT de multiplas colunas os valores únicos serão apresentados integralemnte, os repetidos (em ambas colunas) apenas uma vez. Notar que 36200 se repete porque é distinto em escolas diferentes.

Para cada X na tabela quais são todos os valores de Y?
Para cada fábrica quais produtos são produzidos?
Para cada distrito eleitoral, quais são os candidatos que concorrem?
Para cada casa de shows, quais são os artistas que se apresentarão?

#### ORDER BY
- SELECT first_name, last_name, salary FROM teachers, ORDER BY salary DESC;

| first_name | last_name | salary  |
|------------|-----------|-------- |
| Lee        | Reynolds  |  65000  |
| Samuel     | Cole      |  43500  |
| Betty      | Diaz      |  43500  |
| Kathleen   | Roush     |  38500  |
| Janet      | Smith     |  36200  |
| Samantha   | Bush      |  36200  |

O comando ORDER BY terá efeitos similares ao ORDER do Javascript em que string podem ter ordenamento estranho devido ao charCode.

##### Multiplos ORDER BY
- SELECT last_name, school, hire_date FROM teachers ORDER BY school ASC, hire_date DESC;

| last_name |       school        | hire_date  |
|-----------|---------------------|------------|
| Smith     | F.D. Roosevelt HS   | 2011-10-30 |
| Roush     | F.D. Roosevelt HS   | 2010-10-22 |
| Reynolds  | F.D. Roosevelt HS   | 1993-05-22 |
| Bush      | Myers Middle School | 2011-10-30 |
| Diaz      | Myers Middle School | 2005-08-30 |
| Cole      | Myers Middle School | 2005-08-01 |

#### WHERE
Filtro de Linhas
- SElECT last_name, school, hire_date FROM teachers WHERE school = 'Myers Middle School';

| last_name |       school        | hire_date  |
|-----------|---------------------|------------|
| Cole      | Myers Middle School | 2005-08-01 |
| Bush      | Myers Middle School | 2011-10-30 |
| Diaz      | Myers Middle School | 2005-08-30 |

- SELECT first_name, last_name, school, salary FROM teachers WHERE salary >= 38000;

| first_name | last_name |       school        | salary |
|------------|-----------|---------------------|--------|
| Lee        | Reynolds  | F.D. Roosevelt HS   |  65000 |
| Samuel     | Cole      | Myers Middle School |  43500 |
| Betty      | Diaz      | Myers Middle School |  43500 |
| Kathleen   | Roush     | F.D. Roosevelt HS   |  38500 |

##### WHERE OPERATORS
|    function    |   operator   |
|----------------|--------------|
|   equal to     |       =      |
|  less than     |       <      |
|  more than     |       >      |
|  less or equal |      <=      |
|  more or equal |      >=      |
|       or       |      <>      |
|    not equal   |      !=      |
|     between    |    BETWEEN   |
|       in       |      IN      |

- SELECT first_name, last_name, salary FROM teachers WHERE salary BETWEEN 20000 AND 40000; 

| first_name | last_name | salary |
|------------|-----------|--------|
| Janet      | Smith     |  36200 |
| Samantha   | Bush      |  36200 |
| Kathleen   | Roush     |  38500 |

- SELECT first_name, last_name, salary FROM teachers WHERE last_name IN ('Bush', 'Roush'); 

| first_name | last_name | salary | 
|------------|-----------|--------|
| Samantha   | Bush      |  36200 |
| Kathleen   | Roush     |  38500 |

#### LIKE (SQL) and ILIKE (PostgreSQL) with WHERE
Operadores de comparação (>, <, != ...) são bastante diretos mas LIKE e ILIKE nos permitem achar padrões em strings ao usar caracteres especiais.
A diferença entre eles é que LIKE é case sensitive; enquanto ILIKE é case insensitive.

##### % (sinal de percentual) 
Permite que achemos um ou mais caracteres

##### _ (underscore)
Permite que achemos um caractere

- LIKE 'b%' retornaria qualquer string iniciada com b minúsculo
- LIKE '%ak%' retornaria qualquer string com 'ak' no meio
- LIKE '_aker' retornaria uma string de lenght 5 terminada em 'aker'

- SELECT first_name FROM teachers WHERE first_name LIKE 'sam%';

| first_name |
|------------|
|(0 rows)    |

- SELECT first_name FROM teachers WHERE first_name LIKE 'Sam%';]

| first_name |
|------------|
| Samuel     |
| Samantha   |
|(2 rows)    |

- SELECT first_name FROM teachers WHERE first_name ILIKE 'sam%';

| first_name |
|------------|
| Samuel     |
| Samantha   |
|(2 rows)    |

É importante lembrar que quando se trata de nomes próprios, sobrenomes, lugares, produtos muitas vezes as pessoas que digitam os dados não vão capitalizar as palavras. Então quando a busca é por coisas do gênero é interessante usar ILIKE e % e _ para termos resultados mais completos.

####Combinando operadores com OR e AND
- SELECT * FROM teachers WHERE salary '<' 44000 AND school = 'Myers Middle School';

| id | first_name | last_name |       school        | hire_date  | salary |
|----|------------|-----------|---------------------|------------|--------|
|  3 | Samuel     | Cole      | Myers Middle School | 2005-08-01 |  43500 |
|  4 | Samantha   | Bush      | Myers Middle School | 2011-10-30 |  36200 |
|  5 | Betty      | Diaz      | Myers Middle School | 2005-08-30 |  43500 |














