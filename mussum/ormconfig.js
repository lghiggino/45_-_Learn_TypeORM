console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
console.log("DATABASE_URL ", process.env.DATABASE_URL)
console.log("PORT", process.env.PORT)
console.log("ENTITIES ", process.env.ENTITIES)
console.log("MIGRATIONS ", process.env.MIGRATIONS)
console.log("CLI ", process.env.CLI)
console.log("ENTITIES_DIR", process.env.ENTITIES_DIR)

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/models/**/*.js"
  ],
  "migrations": [
    "dist/database/migrations/**/*.js"
  ],
  "cli": {
    "migrationsDir": [
      "src/database/migrations/"
    ],
    "entitiesDir": "src/models"
  },
  // "ssl": true,
  // "extra": { "ssl": { "rejectUnauthorized": false } }
}
