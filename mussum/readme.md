## Criando o container local
- $ docker run --name postgresMussum -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

## Rodando o container
- $ docker start postgresMussum