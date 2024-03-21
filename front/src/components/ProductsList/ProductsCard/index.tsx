import { useContext } from 'react';
import { IProduct } from '../../../providers/ProductsContext/@types';
import { ProductsContext } from '../../../providers/ProductsContext/ProductsContext';

interface IProductsCardProps {
  product: IProduct;
}

export const ProductsCard = ({ product }: IProductsCardProps) => {
  const {
    SetUpdatingProduct,
    SetUpdatingProductModal,
    SetCreatingProductModal,
  } = useContext(ProductsContext);

  return (
    <li
      onClick={() => (
        SetUpdatingProduct(product),
        SetUpdatingProductModal(true),
        SetCreatingProductModal(false)
      )}
    >
      <p className='colorgrey1'>{product.code}</p>
      <h3>{product.description}</h3>
    </li>
  );
};
