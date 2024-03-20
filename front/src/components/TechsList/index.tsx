import { useContext } from 'react';
import { Ul } from '../../styles/styles';
import { TechsCard } from './TechsCard';
import { TechsContext } from '../../providers/TechsContext/TechsContext';

export const TechsList = () => {
  const { techs } = useContext(TechsContext);
  console.log(techs);

  return (
    <>
      {techs.length == 0 ? (
        <p>Nenhuma tecnologia adicíonada.</p>
      ) : (
        <Ul>
          {techs.map((tech) => (
            <TechsCard key={tech.id} tech={tech} />
          ))}
        </Ul>
      )}
    </>
  );
};
