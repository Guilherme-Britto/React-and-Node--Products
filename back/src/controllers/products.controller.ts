import { Request, Response } from "express";
import createProductsService from "../services/products/createProducts.service";
import listProductsService from "../services/products/listProducts.service";
import updateProductsService from "../services/products/updateProducts.service";
import deleteProductsService from "../services/products/deleteProducts.service";
import {
  productSchemaRequest,
  productSchemaUpdate,
} from "../schemas/products.schema";

const createProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const productData = productSchemaRequest.parse(req.body);
    const newProduct = await createProductsService(productData);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const listProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const products = await listProductsService();
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error listing products:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const idParams: number = Number(req.params.id);
    const productData = productSchemaUpdate.parse(req.body);
    const updatedProduct = await updateProductsService(idParams, productData);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const productId: number = parseInt(req.params.id);
    await deleteProductsService(productId);
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createProductsController,
  listProductsController,
  updateProductsController,
  deleteProductsController,
};
