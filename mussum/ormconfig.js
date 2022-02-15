const dotenv = require("dotenv")
dotenv.config()

const Class = require("./dist/models/Class")

console.log("DATABASE_URL ", process.env.DATABASE_URL )
console.log("PORT", process.env.PORT)
console.log("ENTITIES ", process.env.ENTITIES )
console.log("MIGRATIONS ", process.env.MIGRATIONS )
console.log("CLI ", process.env.CLI )
console.log("ENTITIES_DIR", process.env.ENTITIES_DIR)

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    process.env.ENTITIES
  ],
  "migrations": [
    process.env.MIGRATIONS
  ],
  "cli": {
    "migrationsDir": [
      process.env.CLI
    ],
    "entitiesDir": process.env.ENTITIES_DIR
  },
  "ssl": true, 
  "extra": { "ssl": { "rejectUnauthorized": false }}
}
