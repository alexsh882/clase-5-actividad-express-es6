import express from "express";
import Server from "./server.js";
import { connect } from "./database/config.js";
import { seedRoles } from "./database/seeders/roles.seeder.js";

const app = express();

const server = new Server(app);

await connect()
  .then( async () => {
    console.log("Conexión a la base de datos exitosa.");
    await seedRoles();
  })
  .catch((error) =>
    console.log("Error al conectar a la base de datos: " + error)
  );

server.start();
