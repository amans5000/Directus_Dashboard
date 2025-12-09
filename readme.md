# Directus + PostgreSQL + Node.js Setup Guide

This project uses **Docker**, **Directus**, **PostgreSQL**, and **Node.js** to manage and fetch data from Directus using API login.

---

## Prerequisites

Make sure you have the following installed:

-  Docker Desktop
-  Node.js
-  Git (optional, for GitHub)

---

##  Step 1: Start Docker Desktop

Before running any Docker command:

1. Open **Docker Desktop**
2. Wait until it shows **"Docker is running"**

---

## ✅ Step 2: Configure `docker-compose.yml`

Open your `docker-compose.yml` file and replace the following values:

```yaml
POSTGRES_DB: "your_database"
POSTGRES_USER: "your_username"
POSTGRES_PASSWORD: "your_password"

DB_DATABASE: "your_database"
DB_USER: "your_username"
DB_PASSWORD: "your_password"
```

## Step 3: Run Docker Containers
docker compose up -d

## Step 4: Open Directus Admin Panel
http://localhost:8055/admin/

## Step 5: Login from Node.js to Fetch Data

await client.login({
  email: "directusUser1@admin.com",
  password: "password",
});

## Step 6: Run the Data Fetch File
node printdata.js
