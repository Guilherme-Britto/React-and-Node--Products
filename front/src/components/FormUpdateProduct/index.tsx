import { SubmitButton } from '../../styles/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ProductsContext } from '../../providers/ProductsContext/ProductsContext';
import { IUpdateProductFormValues } from '../../providers/ProductsContext/@types';
import { useOutclick } from '../../hooks/useOutclick';
import Input from '../Input';

export const FormUpdateProduct = () => {
  const {
    productsRemove,
    productsUpdate,
    updaingProduct,
    SetUpdatingProductModal,
  } = useContext(ProductsContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      description: updaingProduct!.description,
      price: parseFloat(updaingProduct!.price).toFixed(2),
    },
  });

  const submit: SubmitHandler<IUpdateProductFormValues> = (formData) => {
    productsUpdate(formData, updaingProduct?.code);
    SetUpdatingProductModal(false);
  };

  const ref = useOutclick<HTMLFormElement>(() =>
    SetUpdatingProductModal(false)
  );

  return (
    <form ref={ref} onSubmit={handleSubmit(submit)}>
      <div className='modalHeader'>
        <h2 className='weigth700 '>Detalhes do Produto</h2>
        <button
          className='colorgrey0 weigth400'
          type='button'
          onClick={() => SetUpdatingProductModal(false)}
        >
          X
        </button>
      </div>
      <p className='projectNameLabel'>Código do produto:</p>
      <p className='projectName'>{updaingProduct?.code}</p>
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
      <p className='projectNameLabel'>Data de Criação:</p>
      <p className='projectName'>
        {new Date(updaingProduct!.created_at).toLocaleDateString('pt-BR')}
      </p>
      <div className='buttons__container'>
        <SubmitButton className='submitButtonUpdate' type='submit'>
          Salvar alterações
        </SubmitButton>
        <button
          className='removeButton colorgrey0 weigth400'
          type='button'
          onClick={() => (
            productsRemove(updaingProduct?.code), SetUpdatingProductModal(false)
          )}
        >
          Excluir
        </button>
      </div>
    </form>
  );
};
