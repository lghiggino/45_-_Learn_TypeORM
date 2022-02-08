const port = process.env.PORT || 3306;

module.exports = {
    "type": "mysql",
    "host": "us-cdbr-east-05.cleardb.net",
    "port": port,
    "username": "bcc433020b1647",
    "password": "744ee2b0",
    "database": "heroku_3321c3cb0c73cf1",
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