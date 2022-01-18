#Criando o container docker com mysql
Passo a passo para criar a conexão
- $ docker run --name withmysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:latest
-- No DBeaver: Aba SSL > Use SSL > deixar os campos em branco

Se o container já existir
- $ docker run withmysql


##Rodando:
- $ yarn run dev2 - Faz o build e roda o nodemon com o app funcionando.


###Rotas:
- http://localhost:3000/docs


####Continuar daqui:
https://youtu.be/6o0Vw0665kw?t=880