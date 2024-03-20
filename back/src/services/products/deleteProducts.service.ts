import { PrismaClient } from "../../../node_modules/.prisma/client/index";

const prisma = new PrismaClient();

const deleteProductService = async (productId: number): Promise<any> => {
  try {
    const deletedProduct = await prisma.product.delete({
      where: { code: productId },
    });
    return deletedProduct;
  } catch (error) {
    console.error("Error deleting product:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteProductService;
