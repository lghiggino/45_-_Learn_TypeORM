# LEARN SQL Language
##### REMEMBER THE ; !!!

## RUNNING THE PROJECT
- docker run --name analysisManual -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

- docker start analysisManual

- psql -h localhost -p 5433 -U postgres

## SQL COMMANDS
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
Distinct 'cleans up' duplicate date and will only show unique values.

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

When performing multiple SELECT DISTINCT using multiple columns unique values whould be displayed in its entirety. Those that repeat themselves (in every column) will show up only once. Notice how salary equal to 36200 shows up twice, but once for each school.

For each X on the table what are the values of Y?
For each Factory what products are made?
For each electoral district what candidates are running?
For each hall which artists are performing?


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

ORDER BY will show similar effects to ORDER in JavaScript. Strings might be returned in unexpected order due to charCode issues (lowerCase vs upperCase, symbols, numbers in strings, etc)

##### Multiple ORDER BY
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
Filtering our tables and returning specific lines
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
Comparison operators (>, <, != ...) are very straightforward, but LIKE and ILIKE allows us to find patterns in strings. We use special characters (% and _)
The main difference between them is that LIKE is case sensitive, while ILIKE is case insensitive and PostgreSQL only.

##### % (sinal de percentual) 
Allows us to find one or more characters in a string

##### _ (underscore)
Allows us to find one single character in a string

- LIKE 'b%' returns any string starting with b;
- LIKE '%ak%' returns any string with 'ak' in the middle:
- LIKE '_aker' returns a string of lenght 5, ending with 'aker';

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

It is important to notice that when it comes to Names, Surnames, Places and Products many times the person entering data in the database will not Capitalize the words. Therefore it is important to remember to use ILIKE in such situation so we can get a wider array of results.

#### Combining operators with OR and AND
- SELECT * FROM teachers WHERE salary BETWEEN 20000 AND 44000 AND school = 'Myers Middle School';

| id | first_name | last_name |       school        | hire_date  | salary |
|----|------------|-----------|---------------------|------------|--------|
|  3 | Samuel     | Cole      | Myers Middle School | 2005-08-01 |  43500 |
|  4 | Samantha   | Bush      | Myers Middle School | 2011-10-30 |  36200 |
|  5 | Betty      | Diaz      | Myers Middle School | 2005-08-30 |  43500 |


- SELECT * FROM teachers WHERE last_name = 'Cole' OR last_name = 'Bush';

| id | first_name | last_name |       school        | hire_date  | salary |
|----|------------|-----------|---------------------|------------|--------|
|  3 | Samuel     | Cole      | Myers Middle School | 2005-08-01 |  43500 |
|  4 | Samantha   | Bush      | Myers Middle School | 2011-10-30 |  36200 |


#### Putting it all together
SQL is very specific regarding the order of its KEYWORDS:

- SELECT column_names FROM table_name WHERE criteria ORDER BY column_names;
- SELECT first_name, last_name, school, hire_date, salary FROM teachers WHERE school ILIKE '%Roos%' ORDER BY hire_date DESC;

| first_name | last_name |      school       | hire_date  | salary |
|------------|-----------|-------------------|------------|--------|
| Janet      | Smith     | F.D. Roosevelt HS | 2011-10-30 |  36200 |
| Kathleen   | Roush     | F.D. Roosevelt HS | 2010-10-22 |  38500 |
| Lee        | Reynolds  | F.D. Roosevelt HS | 1993-05-22 |  65000 |

###### Study time
1. The school district superintendent asks for a list of teachers in each school. Write a query that lists the schools in alphabetical order along with teachers ordered by last name A-Z.
2. Write a query that finds the one teacher whose first name starts with the letter S and who earns more than $40,000.
3. Rank teachers hired since January 1, 2010, ordered by highest paid to lowest.

## UNDERSTANDING DATA TYPES
Regarding documentation, one important document to create is a 'Data Dictionary': a document that lists each column, specifies the data types and explains the column values. 
When a data dictionary is unavailable one way to start understandig the data is by understanding the data types in its columns.

#### CHARACTERS
Character string types are general-purpose types suitable for any combination of text, numbers and symbols

##### char(n)
A fixed length column, where the string is at a fixed length of n.
If you create a char(20) column, and INSERT a string with VALUE 'banana', SQL will pad the rest of the string with white space to fill 20 characteres.
Mainly a remnant of legacy systems as varchar is a better option.

#### varchar(n)
A variable length column where the string has a max-length of n.
If you save 'banana' is the column, SQL won't pad and will save the 6 length string. That saves space on the DB, not storing empty spaces.

#### text (postgres only)
A variable length column with unlimited length

##### How to choose between char, varchar or text?
The flexibility and potential space savings of varchar and text give them advantages, but in some specific cases a fixed length can be better. Say you would like to save a SHA-256 hash, so a char(64) column will be perfect and will help you detect errors when storing data.

- CREATE TABLE char_data_types (varchar_column varchar(10), char_column char(10), text_column text);
- INSERT INTO char_data_types VALUES ('abc', 'abc', 'abc'),('defghi', 'defghi', 'defghi'),('1234567890', '1234567890', '1234567890');

| varchar_column | char_column | text_column | 
|----------------|-------------|-------------|
| abc            | abc         | abc         |
| defghi         | defghi      | defghi      |
| 1234567890     | 1234567890  | 1234567890  |

Typically, using varchar(n) where n is sufficient to handle outliers is a good strategy.

## COPY data from a table into files
- \COPY char_data_types TO 'PWD/typetest.txt' WITH (FORMAT CSV, HEADER, DELIMITER '|');

\COPY teachers TO '/home/lghiggino/Development/03-ProjetosPessoais/45_-_Learn_TypeORM/analysis/teachers.txt' WITH (FORMAT TXT, HEADER, DELIMITER '|');


















