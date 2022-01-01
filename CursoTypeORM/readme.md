#Baseado no link abaixo:
https://www.youtube.com/watch?v=ZBlW5IBdhKk&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b

##Inclui
Docker,
Postgress,
TypeORM

###Step by step
docker run --name postgres -e POSTGRES_PASSWORD=docker -d postgres -p 5433:5432

status do processo: docker ps
removendo o processo: docker rm containerID
