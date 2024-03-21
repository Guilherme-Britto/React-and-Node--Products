export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  code: string;
  description: string;
  price: string;
  created_at: Date;
}

export type ICreateProductFormValues = Omit<
  IProduct,
  'code' | 'created_at' | 'updated_at'
>;

export type IUpdateProductFormValues = Omit<
  IProduct,
  'code' | 'created_at' | 'updated_at'
>;

export interface IProductContext {
  products: IProduct[];
  loading: boolean;
  productsCreate: (formData: ICreateProductFormValues) => Promise<void>;
  productsRemove: (productId: string | undefined) => Promise<void>;
  productsUpdate: (
    formData: IUpdateProductFormValues,
    productId: string | undefined
  ) => Promise<void>;
  updaingProduct: null | IProduct;
  SetUpdatingProduct: React.Dispatch<React.SetStateAction<null | IProduct>>;
  creatingProductModal: boolean;
  SetCreatingProductModal: React.Dispatch<React.SetStateAction<boolean>>;
  updaingProductModal: boolean;
  SetUpdatingProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}
