import { PrismaClient } from "../../../node_modules/.prisma/client/index";
import { TProductRequest } from "../../interfaces/products.interface";

const prisma = new PrismaClient();

const createProductsService = async (
  productData: TProductRequest
): Promise<any> => {
  try {
    const createdProduct = await prisma.product.create({
      data: productData,
    });
    return createdProduct;
  } catch (error) {
    console.error("Error creating product:", error);
  } finally {
    await prisma.$disconnect();
  }
};

export default createProductsService;
