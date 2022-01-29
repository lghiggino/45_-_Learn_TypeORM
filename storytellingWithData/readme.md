## Gerando o projeto no Docker, e depois rodando a imaga
<!-- - docker run --name analysis -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:latest -->
- docker run --name analysis -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=analysis -p 5432:5432 postgres

- docker start analysis

### Create a migration - gera uma class
- $ npm run typeorm migration:create -- -n 'MigrationName' -d src/database/migrations