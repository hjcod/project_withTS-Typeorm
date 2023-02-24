import { DataSource, createConnection } from "typeorm"
require("dotenv").config();


export const AppDataSource = new DataSource(
  {
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
      "src/entities/*.ts"
    ],
    migrations: [
      "src/migrations/*.ts"
    ]
})