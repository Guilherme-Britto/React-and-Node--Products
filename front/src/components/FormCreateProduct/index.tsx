import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';
import { useContext } from 'react';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';
import { ICreateProductFormValues } from '../../providers/ProductsContext/@types';
import { useOutclick } from '../../hooks/useOutclick';

export const FormCreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProductFormValues>();

  const { productsCreate, SetCreatingProductModal } =
    useContext(ProductsContext);

  const submit: SubmitHandler<ICreateProductFormValues> = (formData) => {
    productsCreate(formData);
  };

  const ref = useOutclick<HTMLFormElement>(() =>
    SetCreatingProductModal(false)
  );

  return (
    <form ref={ref} onSubmit={handleSubmit(submit)}>
      <div className='modalHeader'>
        <h2 className='weigth700 '>Cadastrar Produto</h2>
        <button
          className='colorgrey1 weigth600 closeButton'
          type='button'
          onClick={() => SetCreatingProductModal(false)}
        >
          X
        </button>
      </div>
      <Input
        id={'description'}
        placeholder={'Descrição...'}
        label={'Descrição:'}
        {...register('description')}
      />
      <Input
        id={'price'}
        placeholder={'Digite o preço aqui.'}
        label={'Preço:'}
        {...register('price')}
      />

      <SubmitButton className='submitButtonCreate' type='submit'>
        Cadastrar Produto
      </SubmitButton>
    </form>
  );
};
