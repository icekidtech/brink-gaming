import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "your_password",
  database: process.env.DB_NAME || "brink_gaming",
  synchronize: true, // Automatically sync database schema (for development only)
  logging: true, // Log SQL queries
  entities: ["src/entities/**/*.ts"], // Path to your entities
  migrations: ["src/migrations/**/*.ts"], // Path to your migrations
  subscribers: [],
});