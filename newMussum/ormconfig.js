module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5433,
   "username": "postgres",
   "password": "docker",
   "database": "postgres",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/models/**/*.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   // "subscribers": [
   //    "src/subscriber/**/*.ts"
   // ],
   "cli": {
      "entitiesDir": "src/models",
      // "migrationsDir": "src/migrations",
      // "subscribersDir": "src/subscriber"
   }
}