import express from "express";
import { pool } from "./db.js";
import {PORT} from './config.js'

const app = express();

app.listen(PORT);

app.get("/", async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
});

app.get("/create", async (req, res) => {
    const result = await pool.query('INSERT INTO users(name) VALUES ("Edgar")')
    res.json(result)
  });

app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "Hola mundo" as RESULT`);
  res.json(result);
});

console.log("Server on port ",PORT);
