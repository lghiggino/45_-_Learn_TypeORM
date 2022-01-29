module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'analysis',
  dropSchema: false,
  logging: false,
  synchroize: false,
  migrationsRun: true,
  "entities": [
    "src/models/**/*.ts"
  ],
  "migrations": [
    "src/database/migrations/**/*.ts"
  ],
  "cli": {
    "migrationsDir": [
      "src/databse/migrations/"
    ],
    "entitiesDir": "src/models"
  }
};
