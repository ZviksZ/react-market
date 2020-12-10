import * as dotenv from "dotenv";
dotenv.config();

import "./core/db";

const express = require("express");
import { ProductCtrl } from "./controllers/ProductController";
import { UserCtrl } from "./controllers/UserController";
import { registerValidations } from "./validations/register";
import { passport } from "./core/passport";
const multer = require("multer");

const app = express();
app.use(express.static(__dirname));

app.use(express.json());
app.use(passport.initialize());

const storageConfig = multer.diskStorage({
  destination: (_: any, __: any, cb: any) => {
    cb(null, "uploads");
  },
  filename: (_: any, file: any, cb: any) => {
    cb(null, file.originalname);
  },
});

app.use(express.static(__dirname));

app.use(multer({ storage: storageConfig }).single("image"));
app.post("/upload", function (req: any, res: any) {
  console.log(req);
  const filedata = req.file;
  console.log(filedata);
  if (!filedata) res.send("Ошибка при загрузке файла");
  else
    res.json({
      status: "success",
      data: filedata,
    });
});

const productsRoute = `/products/:id`;

app.get("/products", ProductCtrl.index);
app.post("/products/create", ProductCtrl.create);
app.get(productsRoute, ProductCtrl.show);
app.delete(productsRoute, ProductCtrl.delete);
app.patch(productsRoute, ProductCtrl.update);

app.get("/auth/verify", registerValidations, UserCtrl.verify);
app.post("/auth/register", registerValidations, UserCtrl.create);
app.post("/auth/login", passport.authenticate("local"), UserCtrl.afterLogin);
app.get(
  "/auth/me",
  passport.authenticate("jwt", { session: false }),
  UserCtrl.getUserInfo
);

app.listen(process.env.PORT, (): void => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
