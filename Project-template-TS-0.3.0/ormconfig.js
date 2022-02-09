module.exports = {
  "type": "postgres",
  "url": "postgres://postgres:docker@localhost:5433/mussum",
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
  }
}
