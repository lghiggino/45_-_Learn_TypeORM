## Sales API

### Tech Stack

- NodeJS + Express
- Typescript
- TypeORM
- PostgreSQL

### Instructions

#### Create docker postgres DB

```
docker run --name postgres-api-vendas -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

#### Run docker postgres DB

```
docker start postgres-api-vendas
```

#### Starting the application

```
yarn dev
```

##### Migrations

When creating a migration, consider placing the fields with the timestamp type with the value timestamp with time zone.

Replace with (in all application migrations):

```
{
  name: 'created_at',
  type: 'timestamp with time zone',
  default: 'now()',
},
{
  name: 'updated_at',
  type: 'timestamp with time zone',
  default: 'now()',
}
```
