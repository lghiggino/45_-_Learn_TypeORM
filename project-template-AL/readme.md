# From AL project

### Create a migration - gera uma class
- $ npm run typeorm migration:create -- -n 'MigrationName' -d src/migrations

#### Migration logic
- UP: Se eu crio uma coluna no up
- DONW: Eu dropo a coluna do down
- UP: Se eu dropo uma tabela no up
- DOWN: Eu crio uma tabela no down
- Tudo que for feito no up, precisa ser desfeito no down. São espelhos.

### Execute a migration
- $ npm run typeorm migration:run

### Ver detalhes de migração
- $ npm run typeorm migration:show

### Desfazendo a ultima migração
- $ npm run typeorm migration:revert

## Rodando query da CLI
- $ npm run typeorm query "SELECT * from user"


//https://www.youtube.com/watch?v=EHnTVyvr2nw
