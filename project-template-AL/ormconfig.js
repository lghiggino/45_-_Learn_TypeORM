module.exports = {
  "type": "mysql",
  "url": process.env.CLEARDB_DATABASE_URL || process.env.DATABASE_URL,
  "host": "localhost",
  "port": process.env.PORT || 3306,
  "username": "root",
  "password": "my-secret-pw",
  "database": "withmysql",
  "synchronize": false,
  "logging": false,
  "entities": [
    process.env.ENTITIES,
  ],
  "migrations": [
    process.env.MIGRATIONS
  ],
  "cli": {
    "migrationsDir": [
      process.env.CLI
    ],
    "entitiesDir": process.env.ENTITIES_DIR
  }
}