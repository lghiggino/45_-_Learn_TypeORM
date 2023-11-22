require('dotenv/config');

const database = {
  development: 'api-vendas-dev',
  production: 'api-vendas-prod',
  test: 'api-vendas-test',
};

// exemplo de config dinamica para testes
// module.exports = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'ur-username',
//   password: 'password',
//   database: database[process.env.NODE_ENV],
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   synchronize: true,
//   migrationsTableName: 'migration',
//   migrations: ['migration/*.js'],
//   cli: {
//     migrationsDir: 'migration',
//   },
// };

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: database[process.env.NODE_ENV],
  entities: [__dirname + '/src/modules/**/**/*.entity.{js,ts}'],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/typeorm/migrations',
  },
};
