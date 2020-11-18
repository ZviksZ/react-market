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
      console.log(req)
      const product = new ProductModel({
        name: "Laptop 9000",
        price: 300,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum laudantium quis temporibus!",
        image: "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
        purchase: 0,
        diagonal: 16,
        color: "black",
        rating: 5,
        category: "laptop",
      });

      await product.save();

      res.json({
        status: "success",
        data: product,
      });
      /* const product = await ProductModel.create({});


      res.json({
        status: "success",
        data: await product.save(),
      });*/
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async show(req: any, res: express.Response): Promise<void> {
    try {
      const productId = req.params.id;

      if (!isValidObjectId(productId)) {
        res.status(400).send();
        return;
      }

      const product = await ProductModel.findById(productId).exec();

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

  /*  async show(req: any, res: express.Response): Promise<void> {
    try {
      const tweetId = req.params.id;

      if (!isValidObjectId(tweetId)) {
        res.status(400).send();
        return;
      }

      const tweet = await TweetModel.findById(tweetId).populate("user").exec();

      if (!tweet) {
        res.status(404).send();
        return;
      }

      res.json({
        status: "success",
        data: tweet,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user as UserModelInterface;

      if (user?._id) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          res.status(400).json({ status: "error", errors: errors.array() });
          return;
        }

        // TODO: Поправить типизацию
        const data: any = {
          text: req.body.text,
          user: user._id,
        };

        const tweet = await TweetModel.create(data);

        res.json({
          status: "success",
          data: await tweet.populate("user").execPopulate(),
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async delete(req: express.Request, res: express.Response): Promise<void> {
    const user = req.user as UserModelInterface;

    try {
      if (user) {
        const tweetId = req.params.id;

        if (!isValidObjectId(tweetId)) {
          res.status(400).send();
          return;
        }

        const tweet = await TweetModel.findById(tweetId);

        if (tweet) {
          if (String(tweet.user._id) === String(user._id)) {
            tweet.remove();
            res.send();
          } else {
            res.status(403).send();
          }
        } else {
          res.status(404).send();
        }
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }

  async update(req: express.Request, res: express.Response): Promise<void> {
    const user = req.user as UserModelInterface;

    try {
      if (user) {
        const tweetId = req.params.id;

        if (!isValidObjectId(tweetId)) {
          res.status(400).send();
          return;
        }

        const tweet = await TweetModel.findById(tweetId);

        if (tweet) {
          if (String(tweet.user._id) === String(user._id)) {
            const text = req.body.text;
            tweet.text = text;
            tweet.save();
            res.send();
          } else {
            res.status(403).send();
          }
        } else {
          res.status(404).send();
        }
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }*/
}

export const ProductCtrl = new ProductController();
