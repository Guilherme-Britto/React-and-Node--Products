import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../services/Api';
import {
  IProductContext,
  ICreateProductFormValues,
  IUpdateProductFormValues,
  IProduct,
  IDefaultProviderProps,
} from './@types';

export const ProductsContext = createContext({} as IProductContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [updaingProduct, SetUpdatingProduct] = useState<IProduct | null>(null);
  const [products, SetProducts] = useState<IProduct[]>([]);
  const [updaingProductModal, SetUpdatingProductModal] = useState(false);
  const [creatingProductModal, SetCreatingProductModal] = useState(false);
  const [loading, SetLoading] = useState(true);

  const productsList = async (): Promise<void> => {
    let success = false;
    while (!success) {
      try {
        const response = await api.get('/products');
        SetCreatingProductModal(false);
        SetProducts(response.data);
        SetLoading(false);
        success = true;
      } catch (error) {
        console.error(error);
      }
    }
  };

  const productsCreate = async (
    formData: ICreateProductFormValues
  ): Promise<void> => {
    try {
      const response = await api.post('/products', {
        description: formData.description,
        price: Number(parseFloat(formData.price).toFixed(2)),
      });
      SetCreatingProductModal(false);
      SetProducts([...products, response.data]);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const productsRemove = async (
    productId: string | undefined
  ): Promise<void> => {
    try {
      await api.delete(`/products/${productId}`);

      const newProducts = products.filter(
        (product) => product.code !== productId
      );
      SetProducts(newProducts);
    } catch (error) {}
  };

  const productsUpdate = async (
    formData: IUpdateProductFormValues,
    productId: string | undefined
  ): Promise<void> => {
    try {
      await api.patch(`/products/${productId}`, {
        description: formData.description,
        price: Number(parseFloat(formData.price).toFixed(2)),
      });

      const newProducts = products.map((product) => {
        if (productId === product.code) {
          return {
            ...product,
            ...{
              description: formData.description,
              price: parseFloat(formData.price).toFixed(2),
            },
          };
        } else {
          return product;
        }
      });

      SetUpdatingProductModal(false);
      SetProducts(newProducts);
    } catch (error) {}
  };

  useEffect(() => {
    productsList();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productsCreate,
        productsRemove,
        productsUpdate,
        products,
        updaingProduct,
        SetUpdatingProduct,
        updaingProductModal,
        SetUpdatingProductModal,
        creatingProductModal,
        SetCreatingProductModal,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
