import { useContext } from 'react';
import { Ul } from '../../styles/styles';
import { ProductsCard } from './ProductsCard';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';

export const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  products.map;
  return (
    <>
      {products.length == 0 ? (
        <p>Nenhum produto adicíonado.</p>
      ) : (
        <Ul>
          {products.map((product) => (
            <ProductsCard key={product.code} product={product} />
          ))}
        </Ul>
      )}
    </>
  );
};
