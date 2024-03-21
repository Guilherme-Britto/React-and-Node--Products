import { IDefaultProviderProps } from './ProductsContext/@types';
import { ProductsProvider } from './ProductsContext/ProductsContext';

const Providers = ({ children }: IDefaultProviderProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Providers;
