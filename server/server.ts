import * as dotenv from "dotenv";
dotenv.config();

import "./core/db";

const express = require("express");
import { ProductCtrl } from "./controllers/ProductController";

const app = express();

app.use(express.json());
/*app.use(passport.initialize());*/

const productsRoute = `/products/:id`;

app.get("/products", ProductCtrl.index);
app.post("/products/create", ProductCtrl.create);
app.get(productsRoute, ProductCtrl.show);
app.delete(productsRoute, ProductCtrl.delete);
app.patch(productsRoute, ProductCtrl.update);

app.listen(process.env.PORT, (): void => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
