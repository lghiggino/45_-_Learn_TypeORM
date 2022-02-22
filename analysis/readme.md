#LEARN SQL Language
- REMEMBER THE ; !!!

## RODANDO O PROJETO
- docker run --name analysisManual -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

- docker start analysisManual

- psql -h localhost -p 5433 -U postgres

## COMANDOS DE SQL
- Create a new Table
-- CREATE TABLE "teachers" (id bigserial, first_name varchar(25), last_name varchar(50), school varchar(50), hire_date date, salary numeric);

- Single Insert
-- INSERT INTO "teachers" (first_name, last_name, school, hire_date, salary) VALUES ('Janet', 'Smith', 'F.D. Roosevelt HS', '2011-10-30', 36200);

- Multiple Inserts
-- INSERT INTO "teachers" (first_name, last_name, school, hire_date, salary) VALUES ('Lee', 'Reynolds', 'F.D. Roosevelt HS', '1993-05-22', 65000), ('Samuel', 'Cole', 'Myers Middle School', '2005-08-01', 43500), ('Samantha', 'Bush', 'Myers Middle School', '2011-10-30', 36200), ('Betty', 'Diaz', 'Myers Middle School', '2005-08-30', 43500), ('Kathleen', 'Roush', 'F.D. Roosevelt HS', '2010-10-22', 38500);

- Alter Column Name
-- ALTER TABLE species RENAME COLUMN common_species_name TO common_name;

- Select
-- Select All: SELECT * FROM teachers;
-- Select Some Column(s): SELECT first_name, last_name FROM teachers;
-- 


