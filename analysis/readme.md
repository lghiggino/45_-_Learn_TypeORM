#LEARN SQL Language

- docker run --name analysisManual -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

- docker start analysisManual

- psql -h localhost -p 5433 -U postgres

