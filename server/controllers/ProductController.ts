import * as express from "express";

import { ProductModel } from "../models/ProductModel";
import { isValidObjectId } from "../utils/isValidObjectId";
/*
import { validationResult } from "express-validator";
import { TweetModel } from "../models/TweetModel";
import { isValidObjectId } from "../utils/isValidObjectId";
import { UserModelInterface } from "../models/UserModel";*/

class ProductController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const products = await ProductModel.find({}).exec();

      res.json({
        status: "success",
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async create(req: any, res: express.Response): Promise<void> {
    try {

      const product = new ProductModel(req.body);

      await product.save();

      res.json({
        status: "success",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async show(req: express.Request, res: express.Response): Promise<void> {
    try {
      const productId = req.params.id;

      if (!isValidObjectId(productId)) {
        res.status(400).send();
        return;
      }

      const product = await ProductModel.findById(productId);

      if (!product) {
        res.status(404).send();
        return;
      }

      res.json({
        status: "success",
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async delete(req: express.Request, res: express.Response): Promise<void> {
    try {
      const productId = req.params.id;

      if (!isValidObjectId(productId)) {
        res.status(400).send();
        return;
      }

      await ProductModel.findByIdAndDelete(productId);

      res.json({
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async update(req: any, res: express.Response): Promise<void> {
    try {
      const productId = req.params.id;
      const productUpdated = req.body;

      if (!isValidObjectId(productId)) {
        res.status(400).send();
        return;
      }

      await ProductModel.updateOne({ _id: productId }, { ...productUpdated });

      res.json({
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
}

export const ProductCtrl = new ProductController();
