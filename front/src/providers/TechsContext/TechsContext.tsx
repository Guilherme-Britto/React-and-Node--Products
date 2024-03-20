import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../services/Api';
import { toast } from 'react-toastify';
import {
  ITechContext,
  ICreateTechFormValues,
  IUpdateTechFormValues,
  ITech,
  IDefaultProviderProps,
} from './@types';

export const TechsContext = createContext({} as ITechContext);

export const TechsProvider = ({ children }: IDefaultProviderProps) => {
  const [updaingTech, SetUpdatingTech] = useState<ITech | null>(null);
  const [techs, SetTechs] = useState<ITech[]>([]);
  const [updaingTechModal, SetUpdatingTechModal] = useState(false);
  const [creatingTechModal, SetCreatingTechModal] = useState(false);

  const techsList = async (formData: ICreateTechFormValues): Promise<void> => {
    try {
      const response = await api.get('/products');
      console.log(response);
      SetCreatingTechModal(false);
      SetTechs([...techs, response.data]);
    } catch (error) {
      toast.error('Tecnologia já cadastrada!');
    } finally {
    }
  };

  const techsCreate = async (
    formData: ICreateTechFormValues
  ): Promise<void> => {
    const token = localStorage.getItem('@KENZIEHUB:token');

    try {
      const response = await api.post('/products', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Tecnologia adicionada com sucesso!');
      SetCreatingTechModal(false);
      SetTechs([...techs, response.data]);
    } catch (error) {
      toast.error('Tecnologia já cadastrada!');
    } finally {
    }
  };

  const techsRemove = async (techId: string | undefined): Promise<void> => {
    try {
      const token = localStorage.getItem('@KENZIEHUB:token');
      await api.delete(`/products/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.info('Tecnologia removida com sucesso!');

      const newTechs = techs.filter((tech) => tech.id !== techId);
      SetTechs(newTechs);
    } catch (error) {}
  };

  const techsUpdate = async (
    formData: IUpdateTechFormValues,
    techId: string | undefined
  ): Promise<void> => {
    try {
      const token = localStorage.getItem('@KENZIEHUB:token');
      const response = await api.put(`/products/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.map((tech) => {
        if (techId === tech.id) {
          return { ...tech, ...formData };
        } else {
          return tech;
        }
      });
      toast.success('Tecnologia atualizada com sucesso!');
      SetUpdatingTechModal(false);
      SetTechs(newTechs);
    } catch (error) {}
  };

  return (
    <TechsContext.Provider
      value={{
        techsCreate,
        techsRemove,
        techsUpdate,
        techsList,
        updaingTech,
        SetUpdatingTech,
        updaingTechModal,
        SetUpdatingTechModal,
        creatingTechModal,
        SetCreatingTechModal,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
