import { PrismaClient } from "../../../node_modules/.prisma/client/index";
import { TProductUpdateRequest } from "../../interfaces/products.interface";

const prisma = new PrismaClient();

const updateProductService = async (
  productId: number,
  productData: TProductUpdateRequest
): Promise<any> => {
  try {
    const updatedProduct = await prisma.product.update({
      where: { code: productId },
      data: productData,
    });
    return updatedProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default updateProductService;
