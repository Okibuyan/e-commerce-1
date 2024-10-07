import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { request } from "http";
import { error } from "console";

const port = 8888;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({ success: false, error: error });
    }

    let dbData = data ? JSON.parse(data) : [];

    response.json({
      success: true,
      products: dbData,
    });
  });
});
app.listen(port, () => {
  console.log(`Server ajillaj ehlelee ++ http://localhost:${port}`);
});
