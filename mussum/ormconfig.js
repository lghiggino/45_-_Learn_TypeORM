const dotenv = require('dotenv');
dotenv.config();

const Class = require('./src/models/Class')

console.log('process.env.DATABASE_URL >> ', process.env.DATABASE_URL);
console.log("DATABASE_URL ", process.env.DATABASE_URL)
console.log("PORT", process.env.PORT)
console.log("ENTITIES ", process.env.ENTITIES)
console.log("MIGRATIONS ", process.env.MIGRATIONS)
console.log("CLI ", process.env.CLI)
console.log("ENTITIES_DIR", process.env.ENTITIES_DIR)

const ormconfig = {
  "type": "postgres",
  "url": "postgres://postgres:docker@localhost:5433/postgres",
  "entities": [
    Class
  ],
  // "migrations": [
  //   "dist/database/migrations/**/*.js"
  // ],
  // "cli": {
  //   "migrationsDir": [
  //     "src/database/migrations/"
  //   ],
  //   "entitiesDir": "src/models"
  // },
  // "ssl": true,
  // "extra": { "ssl": { "rejectUnauthorized": false } },
  synchronyze: true,
  // logging: false
}

module.exports = ormconfig
