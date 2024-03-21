import { HomeMain, ProductInfo } from './style';
import { useContext } from 'react';
import { FormCreateProduct } from '../../components/FormCreateProduct';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';
import { ProductsList } from '../../components/ProductsList';
import { FormUpdateProduct } from '../../components/FormUpdateProduct';
import { Modal } from '../../styles/styles';

const Home = () => {
  const {
    creatingProductModal,
    SetCreatingProductModal,
    SetUpdatingProductModal,
    updaingProductModal,
    loading,
  } = useContext(ProductsContext);

  if (loading) {
    return (
      <HomeMain>
        <header>
          <h1>Produtos</h1>
        </header>
        <h2 className='colorgrey0'>Carregando...</h2>
      </HomeMain>
    );
  }

  return (
    <HomeMain>
      <header>
        <h1>Produtos</h1>
      </header>
      <ProductInfo>
        <section className='productInfoHeader'>
          <h2 className='colorgrey0 weigth700'>Produtos</h2>
          <button
            className='colorgrey0 weigth700'
            onClick={() => (
              SetCreatingProductModal(true), SetUpdatingProductModal(false)
            )}
          >
            +
          </button>
        </section>
        <ProductsList />
        <Modal>
          <div className='modalDiv'>
            {creatingProductModal && <FormCreateProduct />}
          </div>
        </Modal>
        <Modal>
          <div className='modalDiv'>
            {updaingProductModal && <FormUpdateProduct />}
          </div>
        </Modal>
      </ProductInfo>
    </HomeMain>
  );
};

export default Home;
