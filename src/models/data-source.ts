import { DatabaseType, DataSource } from "typeorm";

// type Config = {
//   type: DatabaseType,
//   host: string,
//   port: number,
//   username: string,
//   password: string,
//   database: string
// }

export const appDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE
});