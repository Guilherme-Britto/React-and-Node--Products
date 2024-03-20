import { PrismaClient } from "../../../node_modules/.prisma/client/index";

const prisma = new PrismaClient();

const listProductsService = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
};

export default listProductsService;
