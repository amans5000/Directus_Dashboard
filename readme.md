1.start the docker desktop
2.run the compose file

a. replace in docker-compose.yml

POSTGRES_DB: "your_database"
POSTGRES_USER: "your_username"
POSTGRES_PASSWORD: "your_password"

DB_DATABASE: "your_database"
DB_USER: "your_username"
DB_PASSWORD: "your_password"

docker compose up -d

3.directus has started on
http://localhost:8055/admin/

4. for fetching data from directus

in fetchfunction
await client.login({
email: "directusUser1@admin.com",
password: "password",
});

run node printdaa.js
