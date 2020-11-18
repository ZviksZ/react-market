import { model, Schema, Document } from "mongoose";

export interface Product {
  _id?: string;
  name: string;
  price: number;
  text: string;
  image: string;
  purchase: number;
  rating: number;
  category: string;
  color: string;
  diagonal: number;
}

export type ProductModelDocumentInterface = Product & Document;

const ProductSchema = new Schema<Product>(
  {
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    purchase: {
      required: true,
      type: Number,
    },
    rating: {
      required: true,
      type: Number,
    },
    category: {
      required: true,
      type: String,
    },
    color: {
      required: true,
      type: String,
    },
    diagonal: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<ProductModelDocumentInterface>(
  "Product",
  ProductSchema
);
