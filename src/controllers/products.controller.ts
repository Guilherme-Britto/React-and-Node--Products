import { Request, Response } from "express";
import createproductsService from "../services/products/createProducts.service";

const createproductsControllerr = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const productData = req.body;

  const newproduct = await createproductsService(productData);

  return res.status(201).json(newproduct);
};

const listproductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const products = await listProductsService();
  return res.json(products);
};

const updateproductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idParams: number = Number(req.params.id);
  const { id, admin } = res.locals.token;
  const productData = req.body;

  if (admin) {
    const product = await updateproductsService(idParams, productData);

    return res.status(200).json(product);
  }

  if (idParams == id) {
    const product = await updateproductsService(idParams, productData);

    return res.status(200).json(product);
  }
};

const deleteproductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const productId: number = parseInt(req.params.id);

  await deleteproductsService(productId);

  return res.status(204).send();
};
export {
  createproductsControllerr,
  listproductsController,
  updateproductsController,
  deleteproductsController,
};
