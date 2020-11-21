import { body } from "express-validator";

export const createProductValidations = [
  body("text", "Введите текст твита")
    .isString()
    .isLength({
      max: 280,
    })
    .withMessage("Максимальная длина твита 280 символов"),
];
