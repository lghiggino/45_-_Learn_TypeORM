#LEARN SQL Language
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

#### SELECT COLUMN
- SELECT first_name, last_name FROM teachers;

#### SELECT DISTINCT
- Distinct elimina dados duplicados e nos mostra apenas valores unicos.

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
Para cada distrito eleitorarl, quais são os candidatos que concorrem?
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






