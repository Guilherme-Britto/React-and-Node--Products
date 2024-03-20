import { HomeMain, TechInfo, UserInfo } from './style';
import { useContext } from 'react';
import { FormCreateTech } from '../../components/FormCreateTech';
import { TechsContext } from '../../providers/TechsContext/TechsContext';
import { TechsList } from '../../components/TechsList';
import { FormUpdateTech } from '../../components/FormUpdateTech';
import { Modal } from '../../styles/styles';

const Home = () => {
  const {
    creatingTechModal,
    SetCreatingTechModal,
    SetUpdatingTechModal,
    updaingTechModal,
  } = useContext(TechsContext);
  const loading = false;
  if (loading) {
    return (
      <HomeMain>
        <header>header</header>
        <h1 className='colorgrey0'>Carregando...</h1>
      </HomeMain>
    );
  }

  return (
    <HomeMain>
      <header>header</header>

      <TechInfo>
        <section className='techInfoHeader'>
          <h1 className='colorgrey0 weigth700'>Tecnologias</h1>
          <button
            className='colorgrey0 weigth700'
            onClick={() => (
              SetCreatingTechModal(true), SetUpdatingTechModal(false)
            )}
          >
            +
          </button>
        </section>
        <TechsList />
        <Modal>
          <div className='modalDiv'>
            {creatingTechModal && <FormCreateTech />}
          </div>
        </Modal>
        <Modal>
          <div className='modalDiv'>
            {updaingTechModal && <FormUpdateTech />}
          </div>
        </Modal>
      </TechInfo>
    </HomeMain>
  );
};

export default Home;
