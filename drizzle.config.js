import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/models",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "test",
    ssl: false,
  },
});
