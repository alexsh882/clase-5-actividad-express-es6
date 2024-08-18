import express from "express";
import Server from "./server.js";
import { connect } from "./database/config.js";


const app = express();



const server = new Server(app)


await connect();


server.start();