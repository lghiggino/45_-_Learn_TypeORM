# From AL project
- Link da playlist: https://www.youtube.com/watch?v=EHnTVyvr2nw&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=4
- Continuar os estudos daqui: https://youtu.be/DVTceFeaAdc?t=1920
- alt: https://www.youtube.com/watch?v=57E8LcqisbQ&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=7

## Gerando o projeto no Docker, e depois rodando a imaga
- docker run --name withmysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:latest
- docker start withmysql

### Create a migration - gera uma class
- $ npm run typeorm migration:create -- -n 'MigrationName' -d src/migrations

#### Migration logic
- UP: Se eu crio uma coluna no up
- DOWN: Eu dropo a coluna do down
- UP: Se eu dropo uma tabela no up
- DOWN: Eu crio uma tabela no down
- Tudo que for feito no up, precisa ser desfeito no down. São espelhos.

### Execute a migration
- $ npm run typeorm migration:run

### Generate a migration
- $ npm run typeorm migration:generate -- -n 'GeneratedMigrationName' -d src/migrations
- - Vai gerar uma migration baseada no model de mesmo nome

### Ver detalhes de migração
- $ npm run typeorm migration:show

### Desfazendo a ultima migração
- $ npm run typeorm migration:revert

## Rodando query da CLI
- $ npm run typeorm query "SELECT * from user"

## Criando uma entity na CLI
- $ npx typeorm entity:create -n Student -d src/models

