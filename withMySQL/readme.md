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
https://www.youtube.com/watch?v=f--l_P6pa44

####Docs
https://github.com/typeorm/typeorm/blob/master/docs/delete-query-builder.md