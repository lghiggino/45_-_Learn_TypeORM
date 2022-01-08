#RCH-FLASH-API

Passo a passo para criar a conexão
- $ docker run --name rchmysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:latest
-- localhost:3306
-- username: root
-- password: my-secret-pw
-- No DBeaver: Aba SSL > Use SSL > deixar os campos em branco


Se o container já existir
- $ docker run rchmysql


##Rodando:
- $ yarn build - constroi o arquivo de rotas
- $ yarn run dev - inicia o TSOA com o nodemon


###Rotas:
- http://localhost:3000/docs