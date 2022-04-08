# LEARN SQL Language
##### REMEMBER THE ; !!!

## RUNNING THE PROJECT
```
docker run --name analysisManual -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
```

```
docker start analysisManual 
```

```
psql -h localhost -p 5433 -U postgres
```

##### If you can solve these,CTRL+F them, and continue below
###### Study time
1. The school district superintendent asks for a list of teachers in each school. Write a query that lists the schools in alphabetical order along with teachers ordered by last name A-Z.
2. Write a query that finds the one teacher whose first name starts with the letter S and who earns more than $40,000.
3. Rank teachers hired since January 1, 2010, ordered by highest paid to lowest.

###### Study time
1. Your company delivers fruit and vegetables to local grocery stores, and you need to track the mileage driven by each driver each day to a tenth of a mile. Assuming no driver would ever travel more than 999 miles in a day, what would be an appropriate data type for the mileage column in your table? Why? Create this table.
2. In the table listing each driver in your company, what are appropriate data types for the drivers’ first and last names? Why is it a good idea to separate first and last names into two columns rather than having one larger name column?
3. Assume you have a text column that includes strings formatted as dates. One of the strings is written as '4//2017' . What will happen when you try to convert that string to the timestamp data type
4. Using the fruit_company_drivers table change the type of hire_date from timestamp to varchar(10).
extra:
5. Create a new column at fruit_company_drivers of interval type, UPDATE the existing rows SETting new date and perform calculations

###### Study time
1. Insert new rows at fruit_company_drivers using the COPY command and the drivers.csv file.
2. Export fruit_company_drivers to a txt file with header, and delimiter.
3. Write a WITH statement to include with COPY to handle the import of an imaginary text file whose first couple of rows look like this:
id:movie:actor
50:#Mission: Impossible#:Tom Cruise
4. Using the table us_counties_2010 you created and filled in this chapter, export to a CSV file the 20 counties in the United States that have the most housing units. Make sure you export only each county’s name, state, and number of housing units. (Hint: Housing units are totaled for each county in the column housing_unit_count_100_percent .)
5. Imagine you’re importing a file that contains a column with these values:
17519.668
20084.461
18976.335
Will a column in your target table with data type numeric(3,8) work for these values? Why or why not?

###### Study time
1. how will 11/6 differ from 11.0 / 6 and 11 cast as numeric(3,1) / 6?
2. perform exponential, square root, cubic root, and factorial operations
3. perform simple operations across multiple columns

###### Study time
1. Write a SQL statement for calculating the area of a circle whose radius is 5 inches. (If you don’t remember the formula, it’s an easy web search.) Do you need parentheses in your calculation? Why or why not?
2. Using the 2010 Census county data, find out which New York state county has the highest percentage of the population that identified as “American Indian/Alaska Native Alone.” What can you learn about that county from online research that explains the relatively large proportion of American Indian population compared with other New York counties?
3. Was the 2010 median county population higher in California or New York?



## SQL COMMANDS - Exploring Data With SELECT
#### CREATE a new TABLE
```
CREATE TABLE "teachers" (id bigserial, first_name varchar(25), last_name varchar(50), school varchar(50), hire_date date, salary numeric);
```

#### Single INSERT
```
INSERT INTO "teachers" (first_name, last_name, school, hire_date, salary) VALUES ('Janet', 'Smith', 'F.D. Roosevelt HS', '2011-10-30', 36200);
```

#### Multiple Inserts
```
INSERT INTO "teachers" (first_name, last_name, school, hire_date, salary) VALUES ('Lee', 'Reynolds', 'F.D. Roosevelt HS', '1993-05-22', 65000), ('Samuel', 'Cole', 'Myers Middle School', '2005-08-01', 43500), ('Samantha', 'Bush', 'Myers Middle School', '2011-10-30', 36200), ('Betty', 'Diaz', 'Myers Middle School', '2005-08-30', 43500), ('Kathleen', 'Roush', 'F.D. Roosevelt HS', '2010-10-22', 38500);
```

#### ALTER TABLE Rename Column Name
```
ALTER TABLE species RENAME COLUMN common_species_name TO common_name;
```

#### SELECT ALL
```
SELECT * FROM teachers;
```

#### SELECT COLUMN(s)
```
SELECT first_name, last_name FROM teachers;
```

#### SELECT DISTINCT
Distinct 'cleans up' duplicate date and will only show unique values.

```
SELECT DISTINCT school FROM teachers;
```

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
```
SELECT first_name, last_name, salary FROM teachers, ORDER BY salary DESC;
```

| first_name | last_name | salary  |
|------------|-----------|---------|
| Lee        | Reynolds  |  65000  |
| Samuel     | Cole      |  43500  |
| Betty      | Diaz      |  43500  |
| Kathleen   | Roush     |  38500  |
| Janet      | Smith     |  36200  |
| Samantha   | Bush      |  36200  |

ORDER BY will show similar effects to ORDER in JavaScript. Strings might be returned in unexpected order due to charCode issues (lowerCase vs upperCase, symbols, numbers in strings, etc)

##### Multiple ORDER BY
```
SELECT last_name, school, hire_date FROM teachers ORDER BY school ASC, hire_date DESC;
```

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
```
SELECT last_name, school, hire_date FROM teachers WHERE school = 'Myers Middle School';
```

| last_name |       school        | hire_date  |
|-----------|---------------------|------------|
| Cole      | Myers Middle School | 2005-08-01 |
| Bush      | Myers Middle School | 2011-10-30 |
| Diaz      | Myers Middle School | 2005-08-30 |

```
SELECT first_name, last_name, school, salary FROM teachers WHERE salary >= 38000;
```

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

```
SELECT first_name, last_name, salary FROM teachers WHERE salary BETWEEN 20000 AND 40000; 
```

| first_name | last_name | salary |
|------------|-----------|--------|
| Janet      | Smith     |  36200 |
| Samantha   | Bush      |  36200 |
| Kathleen   | Roush     |  38500 |

```
SELECT first_name, last_name, salary FROM teachers WHERE last_name IN ('Bush', 'Roush'); 
```

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

-LIKE 'b%' returns any string starting with b;

-LIKE '%ak%' returns any string with 'ak' in the middle:

-LIKE '_aker' returns a string of lenght 5, ending with 'aker';

```
SELECT first_name FROM teachers WHERE first_name LIKE 'sam%';
```

| first_name |
|------------|
|(0 rows)    |

```
SELECT first_name FROM teachers WHERE first_name LIKE 'Sam%';
```

| first_name |
|------------|
| Samuel     |
| Samantha   |
|(2 rows)    |

```
SELECT first_name FROM teachers WHERE first_name ILIKE 'sam%';
```

| first_name |
|------------|
| Samuel     |
| Samantha   |
|(2 rows)    |

It is important to notice that when it comes to Names, Surnames, Places and Products many times the person entering data in the database will not Capitalize the words. Therefore it is important to remember to use ILIKE in such situation so we can get a wider array of results.

#### Combining operators with OR and AND
```
SELECT * FROM teachers WHERE salary BETWEEN 20000 AND 44000 AND school = 'Myers Middle School';
```

| id | first_name | last_name |       school        | hire_date  | salary |
|----|------------|-----------|---------------------|------------|--------|
|  3 | Samuel     | Cole      | Myers Middle School | 2005-08-01 |  43500 |
|  4 | Samantha   | Bush      | Myers Middle School | 2011-10-30 |  36200 |
|  5 | Betty      | Diaz      | Myers Middle School | 2005-08-30 |  43500 |


```
SELECT * FROM teachers WHERE last_name = 'Cole' OR last_name = 'Bush';
```

| id | first_name | last_name |       school        | hire_date  | salary |
|----|------------|-----------|---------------------|------------|--------|
|  3 | Samuel     | Cole      | Myers Middle School | 2005-08-01 |  43500 |
|  4 | Samantha   | Bush      | Myers Middle School | 2011-10-30 |  36200 |


#### Putting it all together
SQL is very specific regarding the order of its KEYWORDS:

```
SELECT column_names FROM table_name WHERE criteria ORDER BY column_names;
```
```
SELECT first_name, last_name, school, hire_date, salary FROM teachers WHERE school ILIKE '%Roos%' ORDER BY hire_date DESC;
```

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

```
CREATE TABLE char_data_types (varchar_column varchar(10), char_column char(10), text_column text);
```
```
INSERT INTO char_data_types VALUES ('abc', 'abc', 'abc'),('defghi', 'defghi', 'defghi'),('1234567890', '1234567890', '1234567890');
```

| varchar_column | char_column | text_column | 
|----------------|-------------|-------------|
| abc            | abc         | abc         |
| defghi         | defghi      | defghi      |
| 1234567890     | 1234567890  | 1234567890  |

Typically, using varchar(n) where n is sufficient to handle outliers is a good strategy.

#### NUMBERS
Numbers columns allows us to perform calculations on those numbers. While numbers stored as characters will present sort problemns, number columns sort as expected. So if we're doing math or numeric order is important number types should be preferred.

##### Integers
Whole numbers, both positive or negative
The SQL standard provides three integer types: smallint, integer and bigint. The difference between them is the maximum size of numbers they can hold. 

|type|size|range|
|----|----|-----|
|smallint|2 bytes| -32768 to 32767 |
|integer|4 bytes| -2147483648 to 2147483647 |
|bigint|8 bytes| 09223372036854775808 to 9223372036854775807 |

Bigint will cover just about any requirement we should ever have, and could be made your default integer type column. 
But if you are sure your numbers should remain within the integer limit that would be a better choice as it will not consume as much space.
When data values remain constrained, smallint makes sense: days of the month or year number is a good example.

###### Auto incrementing Integers
-bigserial, serial, smallserial: special implementation of corresponding integer types that will auto increment each time a new row is inserted into the table. It will always generate a unique value.


##### Decimal Numbers
-represent whole numbers plus a fraction.
-could be handled by fixe-point or floating-point.


###### Fixed-point Type
We inform the precision: the maximun number of digits to the left of the comma, and the scale: a fixed amount of digits to the right of the comma. A fixed-point number with 5 digits of precision and two digits of scale would work as such:
- 1,2 is 00001,20
- 190,7 is 00190,70
- 12345,67 is 12345,67

###### Float-point Type

- real precision
Allows precision up to 6 digits

- double precision
Allows precision up to 15 digits


##### Example
```
CREATE TABLE number_data_types (numeric_column numeric(20,5), decimal_column decimal(20,5), real_column real, double_column double precision);
```
```
INSERT INTO number_data_types VALUES (.7,.7,.7,.7),(2.13579, 2.13579, 2.13579, 2.13579),(2.1347987654, 2.1347987654, 2.1347987654, 2.1347987654);
```

| numeric_column | decimal_column | real_column | double_column |
|----------------|----------------|-------------|---------------|
|        0.70000 |        0.70000 |         0.7 |           0.7 |
|        2.13579 |        2.13579 |     2.13579 |       2.13579 |
|        2.13480 |        2.13480 |   2.1347988 |  2.1347987654 |
|        0.12346 |        0.12346 |  0.12345679 |   0.123456789 | 
| pads or rounds |                | max 7 digits|up to 15 digits|

###### Important
- If you require exact storage and calculations (such as for monetary amounts), use the numeric type instead.

- Comparing two floating-point values for equality might not always work as expected.

- If you want to do complicated calculations with these types for anything important, especially if you rely on certain behavior in boundary cases (infinity, underflow), you should evaluate the implementation carefully.

- Use integers when possible

-choose a big enough number type, when using numeric or decimal set the precision large enough

#### DATES and TIMES

##### Timestamp
- Records date and time
- Needs to be complemented with a timezone: SQL standard is timestamp with time zone, PSQL is timestamptz

##### Date
##### Time

##### Interval
- Records the lenght of a time period, not its starting and ending point in time
- Example: 12 days, 8 hours, 18 seconds...
- Would be typically used for calculations or filtering other date and time columns

##### Example
```
CREATE TABLE date_time_types (timestamp_column timestamp with time zone, interval_column interval);
```

```
INSERT INTO date_time_types VALUES ('2018-12-31 01:00 EST', '2 days'), ('2018-12-31 01:00 -8', '1 month), ('2018-12-31 01:00 Australia/Melbourne', '1 century'), 
(now(), '1 week');
```

|       timestamp_column        | interval_column |
|-------------------------------|-----------------|
| 2018-12-31 06:00:00+00        | 2 days          |
| 2018-12-31 09:00:00+00        | 1 mon           |
| 2018-12-30 14:00:00+00        | 100 years       |
| 2022-03-01 11:46:40.121774+00 | 7 days          |

We could use timestamps and intervals to calculate previous or future dates.

```
SELECT timestamp_column, interval_column, timestamp_column + interval_column AS due_date FROM date_time_types;
```

|       timestamp_column        | interval_column |         due_date              |
|-------------------------------|-----------------|-------------------------------|
| 2018-12-31 06:00:00+00        | 2 days          | 2019-01-02 06:00:00+00        |
| 2018-12-31 09:00:00+00        | 1 mon           | 2019-01-31 09:00:00+00        |
| 2018-12-30 14:00:00+00        | 100 years       | 2118-12-30 14:00:00+00        |
| 2022-03-01 11:46:40.121774+00 | 7 days          | 2022-03-08 11:46:40.121774+00 |

#### BOOLEAN
Stores true or false

#### GEOMETRIC
includes points, lines, circles and other two dimensional objects

#### NETWORK ADDRESS TYPES
includes IP or MAC addresses

#### UUID
Universally Unique Identifier type, sometimes used as unique key value in tables

#### XML and JSON
Stores data in these specific formats

#### Transforming data using CAST()
- Will only succeed when the target data type can accomodate the original value
```
SELECT timestamp_column, CAST(timestamp_column AS varchar(10)) FROM date_time_types;
```

|       timestamp_column        | timestamp_column |
|-------------------------------|------------------|
| 2018-12-31 06:00:00+00        |    2018-12-31    |
| 2018-12-31 09:00:00+00        |    2018-12-31    |
| 2018-12-30 14:00:00+00        |    2018-12-30    |
| 2022-03-01 11:46:40.121774+00 |    2022-03-01    |
|        timestamp type         |  character type  |

```
SELECT numeric_column, CAST(numeric_column AS integer), CAST(numeric_column AS varchar(6)) FROM number_data_types;
```

| numeric_column | numeric_column | numeric_column |
|----------------|----------------|----------------|
|        0.70000 |              1 | 0.7000         |
|        2.13579 |              2 | 2.1357         |
|        2.13480 |              2 | 2.1348         |
|        0.12346 |              0 | 0.1234         |
|  numeric type  |     integer    |   varchar(6)   |

##### PostgreSQL CAST() shortand ::
```
SELECT timestamp_column::varchar(10) FROM date_time_types;
```

| timestamp_column |
|------------------|
|    2018-12-31    |
|    2018-12-31    |
|    2018-12-30    |
|    2022-03-01    |

###### Study time
1. What are the three types of character types?
2. what is the main difference between them?
3. What are the three types of integer types?
4. What is the main difference between them?
5. What is a good way to create an id column with unique values? What are the three types that could be used?
6. What are the two types of decimal numbers? What is their behavior?
7. How does Float point type split? (real and double precision)
8. How does Fixed point type split? (numeric and decimal)
9. What is the safest bet regarading float data types? (use numeric and specify the number of decimal digits)
10. What are the 4 date time types?
11. What is a concern regarding timestamp type?
12. How to perform calculations using timestamp and interval?
13. What are other miscelaneous types? (boolean, geometric, network, UUID, XML and JSON)
14. How to perform data type transformation? What are some concerns with that operation? (CAST(), type overlap)

###### Study time
1. Your company delivers fruit and vegetables to local grocery stores, and you need to track the mileage driven by each driver each day to a tenth of a mile. Assuming no driver would ever travel more than 999 miles in a day, what would be an appropriate data type for the mileage column in your table? Why? Create this table. (id, mileage, first_name, last_name, state_code, hire_date, contract_duration)z
2. In the table listing each driver in your company, what are appropriate data types for the drivers’ first and last names? Why is it a good idea to separate first and last names into two columns rather than having one larger name column?
3. Assume you have a text column that includes strings formatted as dates. One of the strings is written as '4//2017' . What will happen when you try to convert that string to the timestamp data type?
4. Using the fruit_company_drivers table change the type of hire_date from timestamp to varchar(10).
extra:
5. Create a new column at fruit_company_drivers of interval type, UPDATE the existing rows SETting new date and perform calculations
6. Insert new rows at fruit_company_drivers using the COPY command and the drivers.csv file.

## IMPORTING AND EXPORTING DATA

### COPY
- PostgreSQL specific implementation with options for including or excluding columns and handling various delimites text types.
- It is able to import and export data from tables or from the result of a query.

#### Preparing data for imports
1. prep the source data in the form of a delimited text file
2. create a table to store the data
3. write a COPY script to perform the import

#### Delimited Text Files
Contains rows of data and each roe represents one row in a table. A character separates each row.
CSV is a typical example, where the comma separates each piece of data without any spaces. The comma tells the software to treat each item as a column upon import or export.
- John, Doe, "123 Main Street, apartment 504", New York, NY, 555-1234 

##### Import Example (COPY FROM)
```
COPY fruit_company_drivers FROM '/pwd/drivers.csv' WITH(FORMAT CSV, HEADER);
```
- Copy to tableName from filePath with format csv, exclude the header from the csv


| id | first_name | last_name | mileage |           hire_date           |
|----|------------|-----------|---------|-------------------------------|
|  3 | abc        | def       |  123.22 | 2002-02-03 00:00:00+00        |
|  4 | def        | ghi       |  234.45 | 2003-03-04 00:00:00+00        |
|  5 | ghi        | jkl       |  345.67 | 2004-04-05 00:00:00+00        |
|  6 | jkl        | mno       |  456.78 | 2005-05-06 00:00:00+00        |
|  7 | mno        | pqr       |  567.89 | 2006-07-08 00:00:00+00        |
|  8 | pqr        | stu       |  678.90 | 2007-08-09 00:00:00+00        |

#### LIMITING the number of results
```
SELECT geo_name, state_us_abbreviation, internal_point_lon FROM us_counties_2010 ORDER BY internal_point_lon DESC LIMIT 5;
```

##### Importing a DEFINED subset of Columns with COPY
```
CREATE TABLE supervisor_salaries (town varchar(30), county varchar(30), supervisor varchar(30), start_date date, salary money, benefits money);
```
```
\COPY supervisor_salaries (town, supervisor, salary) FROM '/home/lghiggino/Development/03-ProjetosPessoais/45_-_Learn_TypeORM/analysis/chapter04/supervisor_salaries.csv' WITH (FORMAT CSV, HEADER);
```
```
SELECT * FROM supervisor_salaries;
```

|    town     | county | supervisor | start_date |   salary   | benefits |
|-------------|--------|------------|------------|------------|----------|
| Anytown     |        | Jones      |            | $27,000.00 |          |
| Bumblyburg  |        | Baker      |            | $24,999.00 |          |
| Moetown     |        | Smith      |            | $32,100.00 |          |
| Bigville    |        | Kao        |            | $31,500.00 |          |
| New Brillig |        | Carroll    |            | $72,690.00 |          |

 
#### Exportind Data
##### Export All Example (COPY TO)
```
\COPY char_data_types TO 'PWD/typetest.txt' WITH (FORMAT CSV, HEADER, DELIMITER '|');
```
```
\COPY teachers TO '/home/lghiggino/Development/03-ProjetosPessoais/45_-_Learn_TypeORM/analysis/drivers.txt' WITH (FORMAT CSV, HEADER, DELIMITER '|');
```
 
##### Export Particular Columns
```
\COPY us_counties_2010 (geo_name, internal_point_lat, internal_point_lon) TO '/PWD/us_counties_latlon.txt' WITH (FORMAT CSV, HEADER, DELIMITER '|');
```

##### Export Query Results
```
\COPY (SELECT geo_name, state_us_abbreviation FROM us_counties_2010 WHERE geo_name ILIKE '%mill%') TO '/home/lghiggino/Development/03-ProjetosPessoais/
45_-_Learn_TypeORM/analysis/us_counties_mill_export_selected.txt' WITH (FORMAT CSV, HEADER, DELIMITER '|');
```


###### Study time
1. Insert new rows at fruit_company_drivers using the COPY command and the drivers.csv file.
\COPY fruit_company_drivers (id, first_name, last_name, mileage, hire_date, due_date) FROM '/PWD/drivers.csv' WITH (FORMAT CSV, HEADER);

2. Export fruit_company_drivers to a txt file with header
Continue your exploration of data import and export with these exercises.
Remember to consult the PostgreSQL documentation at https://www.post​gresql​
.org/docs/current/static/sql-copy.html for hints:
3. Write a WITH statement to include with COPY to handle the import of an imaginary text file whose first couple of rows look like this:
id:movie:actor
50:#Mission: Impossible#:Tom Cruise
4. Using the table us_counties_2010 you created and filled in this chapter, export to a CSV file the 20 counties in the United States that have the most housing units. Make sure you export only each county’s name, state, and number of housing units. (Hint: Housing units are totaled for each countyin the column housing_unit_count_100_percent .)
5. Imagine you’re importing a file that contains a column with these values:
17519.668
20084.461
18976.335
Will a column in your target table with data type numeric(3,8) work for these values? Why or why not?]

## Basic Math And Stats With SQL

### Math Operators

|    Operator |  Description   |
|-------------|----------------|
|   +, -, *, /|    you know    |
|      %      |    modulo      |
|      ^      | exponentiation | 
|    \|\|\/   |    cuberoot    |
|       !     |   factorial    |

#### Math and Data Types
When using the 4 basic operators expect the results to be similar to the inputs:
- numeric + numeric = numeric
- integer + integer = integer
- any + floating-point = double precision

Exponentiation, root and factorial returns numeric and floating-point types, event if the input is an integer.

##### Adding, Subtracting and Multiplying
```
SELECT 2 + 2;
```
```
SELECT 9 - 3 AS result;
```

| result |
|--------|
|   6    |

```
SELECT 2 * 8;
```

##### Division and Modulo
```
SELECT 9 / 3;
```
```
SELECT 9 % 2;
```
```
SELECT 11 / 6;    vs    SELECT 11.0 / 6      vs    SELECT CAST (11 AS numeric(3,1)) / 6;
```

| ?column? |        ?column?      |        ?column?      |
|----------|----------------------|----------------------|
|        1 |  1.8333333333333333  |  1.8333333333333333  |


##### Exponents, Roots and Factorial
```
SELECT 3 ^ 4;
```
```
SELECT |/ 10;
```

|      ?column?      |
|--------------------|
| 3.1622776601683795 |

```
SELECT sqrt(10);
```
```
SELECT ||/ 10:
```

|      ?column?      |
|--------------------|
| 2.1544346900318834 |

```
SELECT 4 !;
```

| ?column? |
|----------|
|       24 | 

##### Remember PEMDAS - order of operations
1. Exponents and roots
2. Multiplication, division, modulo
3. Addition and subtraction

##### Doing math across Table Columns
Selecting 'all'
```
SELECT geo_name, state_us_abbreviation AS "st", p0010001 AS "Total Population", p0010003 AS "White Alone", p0010004 AS "Black or African American Alone", p0010005 AS "Am Indian/Alaska Native Alone", p0010006 AS "Asian Alone", p0010007 AS "Native Hawaiian and Other Pacific Islander Alone", p0010008 AS "Some Other Race Alone", p0010009 As "Two or More Races" FROM us_counties_2010;
```

Select doing math
```
SELECT geo_name, state_us_abbreviation AS "st", p0010003 AS "White Alone", p0010004 AS "Black Alone", p0010003 + p0010004 AS "Total White and Black" FROM us_counties_2010;
```

|             geo_name              | st | White Alone | Black Alone | Total White and Black |
|-----------------------------------|----|-------------|-------------|-----------------------|
| Autauga County                    | AL |       42855 |        9643 |                 52498 |
| Baldwin County                    | AL |      156153 |       17105 |                173258 |
| Barbour County                    | AL |       13180 |       12875 |                 26055 |
| Bibb County                       | AL |       17381 |        5047 |                 22428 |
| Blount County                     | AL |       53068 |         761 |                 53829 |


```
SELECT geo_name, state_us_abbreviation AS "st", p0010001 AS "total", p0010003 + p0010004 + p0010005 + p0010006 + p0010007 + p0010008 + p0010009 AS "All races", (p0010003 + p0010004 + p0010005 + p0010006 + p0010007 + p0010008 + p0010009) - p0010001 AS "Difference" FROM us_counties_2010 ORDER BY "total" DESC; 
```

|             geo_name              | st |  total  | All races | Difference |
|-----------------------------------|----|---------|-----------|------------|
| Los Angeles County                | CA | 9818605 |   9818605 |          0 |
| Cook County                       | IL | 5194675 |   5194675 |          0 |
| Harris County                     | TX | 4092459 |   4092459 |          0 |
| Maricopa County                   | AZ | 3817117 |   3817117 |          0 |

With the difference column showing zeros only we can be confident that our import was clean. This is little this is good practice to figure out any discrepancies on the imported data.

##### Finding Percentages 

```
SELECT geo_name, state_us_abbreviation as "st", (CAST(p0010006 AS numeric(8,1)) / p0010001) * 100 AS "pct_asian" FROM us_counties_2010 ORDER BY "pct_asian" DESC LIMIT 5;
```

-- The key point here is the CAST as numeric. If we used the original integer types, we would not get the fractional data. And every row would return 0, the quotient.

|        geo_name        | st |        pct_asian        |
|------------------------|----|-------------------------|
| Honolulu County        | HI | 43.89497769109962474000 |
| Aleutians East Borough | AK | 35.97580388411333970100 |
| San Francisco County   | CA | 33.27165361664607226500 |
| Santa Clara County     | CA | 32.02237037519322063600 |
| Kauai County           | HI | 31.32461880132953749400 |

##### Tracking Percentage Change
```
CREATE TABLE percentage_change (department varchar(20), spend_2014 numeric(10,2), spend_2017 numeric(10,2));
```
```
INSERT INTO percentage_change VALUES ('Building', 250000, 289000), ('Assessor', 178556, 179500), ('Library', 87777, 90001), ('Clerk', 451980, 650000), ('Police', 
250000, 223000), ('Recreation', 1999000, 195000);
```
```
SELECT department, spend_2014, spend_2017, (spend_2017 - spend_2014) / spend_2014 * 100 AS "pct_change" FROM percentage_change ;
```

| department | spend_2014 | spend_2017 |        pct_change        |
|------------|------------|------------|--------------------------|
| Building   |  250000.00 |  289000.00 |  15.60000000000000000000 |
| Assessor   |  178556.00 |  179500.00 |   0.52868567844261744200 |
| Library    |   87777.00 |   90001.00 |   2.53369333652323501600 |
| Clerk      |  451980.00 |  650000.00 |  43.81167308287977344100 |
| Police     |  250000.00 |  223000.00 | -10.80000000000000000000 |
| Recreation | 1999000.00 |  195000.00 | -90.24512256128064032000 |

##### Aggregate Functions for Averages and Sums

##### Finding the Median

##### Finding the Median with Percentile Functions

##### Median and Percentiles with Census Data

##### Finding Other Quantiles with Percentile Functions

##### Creating Median() Function

##### Finding the Mode



##### MAX(value)
```
SELECT * FROM teachers WHERE salary = (SELECT MAX (salary) FROM teachers);
```

| id | first_name | last_name |      school       | hire_date  | salary |
|----|------------|-----------|-------------------|------------|--------|
|  2 | Lee        | Reynolds  | F.D. Roosevelt HS | 1993-05-22 |  65000 |


###### Study time
1. Write a SQL statement for calculating the area of a circle whose radius is 5 inches. (If you don’t remember the formula, it’s an easy web search.) Do you need parentheses in your calculation? Why or why not?
2. Using the 2010 Census county data, find out which New York state county has the highest percentage of the population that identified as “American Indian/Alaska Native Alone.” What can you learn about that county from online research that explains the relatively large proportion of American Indian population compared with other New York counties?
3. Was the 2010 median county population higher in California or New York?

### Joining Tables in a Relational Database

#### Linking Tables Using Join
Follows this structure:
```
SELECT * FROM table_a JOIN table_b ON table_a.key_column = table_b.foreign_column;
```
```
INSERT INTO teachers (first_name, last_name, school, hire_date, salary) VALUES ('Leonardo', 'Ghiggino', 'Myers Middle School', now(), 47000);
```
```
SELECT * FROM fruit_company_drivers JOIN teachers ON fruit_company_drivers.first_name = teachers.first_name;
```

| id | first_name | last_name | mileage |           hire_date           | due_date | id | first_name | last_name |       school        | hire_date  | salary |
|----|------------|-----------|---------|-------------------------------|----------|----|------------|-----------|---------------------|------------|--------|
|  1 | Leonardo   | Ghiggino  |  123.45 | 2022-03-07 12:00:14.173131+00 | 1 mon    |  7 | Leonardo   | Ghiggino  | Myers Middle School | 2022-03-16 |  47000 |

!ERROR
```
SELECT first_name, last_name, mileage FROM fruit_company_drivers JOIN teachers ON fruit_company_drivers.first_name = teachers.first_name;
```
ERROR:  column reference "first_name" is ambiguous
LINE 1: SELECT first_name, last_name, mileage FROM fruit_company_dri...

But this works:
```
SELECT  mileage, school FROM fruit_company_drivers JOIN teachers ON fruit_company_drivers.first_name = teachers.first_name;
```

| mileage |       school        |
|---------|---------------------|
|  123.45 | Myers Middle School |


This would also work:
```
SELECT fruit_company_drivers.first_name, mileage, school FROM fruit_company_drivers JOIN teachers ON fruit_company_drivers.first_name = teachers.first_name;
```

| first_name | mileage |       school        |
|------------|---------|---------------------|
| Leonardo   |  123.45 | Myers Middle School |

###### Tables with CONSTRAINT, REFERENCES, and PRIMARY KEY 
```
CREATE TABLE departments(dept_id bigserial, dept varchar(100), city varchar(100), CONSTRAINT dept_key PRIMARY KEY(dept_id), CONSTRAINT dept_city_unique UNIQUE (dept, city));
```
```
CREATE TABLE employees (emp_id bigserial, first_name varchar(100), last_name varchar(100), salary integer, dept_id integer REFERENCES departments (dept_id), CONSTRAINT emp_key PRIMARY KEY (emp_id), CONSTRAINT emp_dept_unique UNIQUE (emp_id, dept_id));
```
```
INSERT INTO departments (dept, city) VALUES ('tax', 'Atlanta'), ('IT', 'Boston');
```
```
INSERT INTO employees (first_name, last_name, salary, dept_id) VALUES('Nancy', 'Jones', 62500, 1), ('Lee', 'Smith', 59300, 1), ('Soo', 'Nguyen', 83000, 2), 
('Janet', 'King', 95000, 2);
```
```
SELECT * FROM employees JOIN departments ON employees.dept_id = departments.dept_id;
```

| emp_id | first_name | last_name | salary | dept_id | dept_id | dept |  city   |
|--------|------------|-----------|--------|---------|---------|------|---------|
|      2 | Nancy      | Jones     |  62500 |       1 |       1 | tax  | Atlanta |
|      3 | Lee        | Smith     |  59300 |       1 |       1 | tax  | Atlanta |
|      5 | Janet      | King      |  95000 |       2 |       2 | IT   | Boston  |
|      6 | Peter      | Schräder  |  72500 |       2 |       2 | IT   | Boston  |
|      1 | John       | Overray   |  81000 |       2 |       2 | IT   | Boston  |
|      4 | Soo        | Nguyen    |  83000 |       2 |       2 | IT   | Boston  |


A primary key is a column or collection of columns whose values uniquely identify each row in a table. It enforces:
- The column or collection of columns must have a unique value for each row;
- THe column or collection of columns can't have missing values.

We defined the primary key for departments and employees using the CONSTRAINT keyword. 
In employees the emp_id column uniquely identifies each row in the table. For us to know which department each employee works in that table includes the dept_id column. The values in that column refer to the department table's primary key (unique). 
employees.dept_id is a foreign key to departments.dept_id which means that the values entered in employees.dept_id must exist on department.dept_id

```
INSERT INTO employees (first_name, last_name, salary, dept_id) VALUES('Nancy', 'Jones', 62500, 1), ('Peter', 'Parker', 69300, 3);
```
returns ERROR:  insert or update on table "employees" violates foreign key constraint "employees_dept_id_fkey"
DETAIL:  Key (dept_id)=(3) is not present in table "departments".

##### Querying Multiple Tables Using JOIN + WHERE
```
SELECT * FROM employees JOIN departments ON employees.dept_id = departments.dept_id WHERE city = 'Atlanta';
```

| emp_id | first_name | last_name | salary | dept_id | dept_id | dept |  city   |
|--------|------------|-----------|--------|---------|---------|------|---------|
|      2 | Nancy      | Jones     |  62500 |       1 |       1 | tax  | Atlanta |
|      3 | Lee        | Smith     |  59300 |       1 |       1 | tax  | Atlanta |


#### Join Types
- JOIN: returns rows from both tables where matching values are found in the joined columns of both tables.

```
CREATE TABLE schools_left(id integer CONSTRAINT left_id_key PRIMARY KEY, left_school varchar(30));
CREATE TABLE schools_right(id integer CONSTRAINT right_id_key PRIMARY KEY, right_school varchar(30));
INSERT INTO schools_left (id, left_school) VALUES (1, 'Oak Street School'), (2, 'Roosevelt High School'), (5, 'Washington Middle School'), (6, 'Jefferson High School');
INSERT INTO schools_right (id, right_school) VALUES (1, 'Oak Street School'), (2, 'Roosevelt High School'), (3, 'Morrison Elementary'), (4, 'Chase Magnet Academy'), (6, 'Jefferson High School');
```

```
SELECT * FROM schools_left JOIN schools_right ON schools_left.id = schools_right.id;
```

| id |      left_school      | id |     right_school      |
|----|-----------------------|----|-----------------------|
|  1 | Oak Street School     |  1 | Oak Street School     |
|  2 | Roosevelt High School |  2 | Roosevelt High School |
|  6 | Jefferson High School |  6 | Jefferson High School |

- LEFT JOIN: return rows from the left table plus rows that match values in the joined column from the right table. If nothing matches no values return
```
SELECT * FROM schools_left LEFT JOIN schools_right ON schools_left.id = schools_right.id;

```

| id |       left_school        | id |     right_school      |
|----|--------------------------|----|-----------------------|
|  1 | Oak Street School        |  1 | Oak Street School     |
|  2 | Roosevelt High School    |  2 | Roosevelt High School |
|  5 | Washington Middle School |    |                       |
|  6 | Jefferson High School    |  6 | Jefferson High School |

Everything from left, plus matching values on right

- RIGHT JOIN: return every row from the right table plus rows that match the key values in the key column from the left table.
```
 SELECT * FROM schools_left RIGHT JOIN schools_right ON schools_left.id = schools_right.id;
```

| id |      left_school      | id |     right_school      |
|----|-----------------------|----|-----------------------|
|  1 | Oak Street School     |  1 | Oak Street School     |
|  2 | Roosevelt High School |  2 | Roosevelt High School |
|    |                       |  3 | Morrison Elementary   |
|    |                       |  4 | Chase Magnet Academy  |
|  6 | Jefferson High School |  6 | Jefferson High School |

Everything from right, plus matching values on left

-- You should use LEFT or RIGHT JOIN in situation where you wnat to query results to contain ALL the rows from one of the tables;
-- You want to look for missing values in one of the tables;
-- When you know some rows in a joined table won't have matching values.

- FULL OUTER JOIN: returns every from from both tables and matches rows, and then joins the rows where values in the joined columns match
```
 SELECT * FROM schools_left FULL OUTER JOIN schools_right ON schools_left.id = schools_right.id;
```

| id |       left_school        | id |     right_school      |
|----|--------------------------|----|-----------------------|
|  1 | Oak Street School        |  1 | Oak Street School     |
|  2 | Roosevelt High School    |  2 | Roosevelt High School |
|  5 | Washington Middle School |    |                       |
|  6 | Jefferson High School    |  6 | Jefferson High School |
|    |                          |  4 | Chase Magnet Academy  |
|    |                          |  3 | Morrison Elementary   |

Everything from every table

-- Less used and less usable but could be helpful in identifying the degree to which tables share matching values.

- CROSS JOIN: returns every possible combination of rows from both tables
```
SELECT * FROM schools_left CROSS JOIN schools_right;
```
| id |       left_school        | id |     right_school      |
|----|--------------------------|----|-----------------------|
|  1 | Oak Street School        |  1 | Oak Street School     |
|  1 | Oak Street School        |  2 | Roosevelt High School |
|  1 | Oak Street School        |  3 | Morrison Elementary   |
|  1 | Oak Street School        |  4 | Chase Magnet Academy  |
|  1 | Oak Street School        |  6 | Jefferson High School |
|  2 | Roosevelt High School    |  1 | Oak Street School     |
|  2 | Roosevelt High School    |  2 | Roosevelt High School |
|  2 | Roosevelt High School    |  3 | Morrison Elementary   |
|  2 | Roosevelt High School    |  4 | Chase Magnet Academy  |
|  2 | Roosevelt High School    |  6 | Jefferson High School |
|  5 | Washington Middle School |  1 | Oak Street School     |
|  5 | Washington Middle School |  2 | Roosevelt High School |
|  5 | Washington Middle School |  3 | Morrison Elementary   |
|  5 | Washington Middle School |  4 | Chase Magnet Academy  |
|  5 | Washington Middle School |  6 | Jefferson High School |
|  6 | Jefferson High School    |  1 | Oak Street School     |
|  6 | Jefferson High School    |  2 | Roosevelt High School |
|  6 | Jefferson High School    |  3 | Morrison Elementary|  |
|  6 | Jefferson High School    |  4 | Chase Magnet Academy  |
|  6 | Jefferson High School    |  6 | Jefferson High School |

-- avoid this one. Please.
-- If you'd like to create a full combinational database. Shirts Sizes vs. Colors S, M, L, XL vs. Red, Orange, Yellow, Green, Blue, Navy Blue, Purple, Black, White. And now you have 36 rows (4 x 9)

##### Using Null to Find Rows with Missing Values
```
SELECT * FROM schools_left LEFT JOIN schools_right ON schools_left.id = schools_right.id WHERE schools_right.id IS NULL;
```
| id |       left_school        | id | right_school |
|----|--------------------------|----|--------------|
|  5 | Washington Middle School |    |              |

It will find the rows where the one row from the left table didn’t have a match on the right side.

```
SELECT * FROM schools_left RIGHT JOIN schools_right ON schools_left.id = schools_right.id WHERE schools_left.id IS NULL;
```
| id | left_school | id |     right_school     |
|----|-------------|----|----------------------|
|    |             |  3 | Morrison Elementary  |
|    |             |  4 | Chase Magnet Academy |


##### Selecting Specific Columns in a Join
We must remember to be specific about which duplicated columns we should select:
```
SELECT schools_left.id, schools_left.left_school, schools_right.right_school FROM schools_left LEFT JOIN schools_right ON schools_left.id = schools_right.id;
```

| id |       left_school        |     right_school      |
|----|--------------------------|-----------------------|
|  1 | Oak Street School        | Oak Street School     |
|  2 | Roosevelt High School    | Roosevelt High School |
|  5 | Washington Middle School |                       |
|  6 | Jefferson High School    | Jefferson High School |










