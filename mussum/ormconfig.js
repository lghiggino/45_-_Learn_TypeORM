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
  extra: {
    ssl: true
  }
}
