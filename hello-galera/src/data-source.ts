import "reflect-metadata";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type: "postgres",

  host: "localhost",
  port: 5432,
  database: "galera2025",
  username: "postgres",
  password: "postgres",

  synchronize: false,
  logging: true,
//   entities: [], // pode ser com abaixo
    entities: ["src/**/entities/*.entity.ts"],
    migrations: ["src/persistence/typeorm/migrations/**/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Datasource is UP!!!");
  })
  .catch((err) => {
    console.log("Erro ao inicilizar o DS!", err);
  });