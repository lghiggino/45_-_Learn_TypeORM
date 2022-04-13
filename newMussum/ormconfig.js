

module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "synchronize": true,
   "logging": false,
   "autoLoadEntities": true,
   "entities": [
      process.env.ENTITIES
   ],
   "migrations": [
      process.env.MIGRATIONS,
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/migrations",
      "subscribersDir": "src/subscriber"
   },
   "ssl": true,
   "extra": {
      "ssl": {
         "rejectUnauthorized": false
      }
   }
}