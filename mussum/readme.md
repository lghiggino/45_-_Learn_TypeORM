## Criando o container local
- $ docker run --name postgresMussum -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

## Rodando o container
- $ docker start postgresMussum

## Conectando com o banco de dados no Heroku
- $ heroku pg:psql

### Lendo os dados do banco
- $ \dt+

## Conectando com o servidor no Heroku
- $ heroku run bash

## Rodando as Migrations dentro do servidor da Heroku
- $ npx typeorm migration:run