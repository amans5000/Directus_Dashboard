import { createDirectus, rest, authentication, readItems } from "@directus/sdk";

const client = createDirectus("http://localhost:8055")
  .with(rest())
  .with(authentication());

async function fetchData() {
  try {
    await client.login({
      email: "directusUser1@admin.com",
      password: "password",
    });

    const companies = await client.request(readItems("companies"));

    console.log("Companies:", companies);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchData();
