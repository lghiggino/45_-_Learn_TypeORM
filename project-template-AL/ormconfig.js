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
    "src/models/**/*.ts",
    "src/models/**/*.js"
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
}