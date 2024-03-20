import { IDefaultProviderProps } from './TechsContext/@types';
import { TechsProvider } from './TechsContext/TechsContext';

const Providers = ({ children }: IDefaultProviderProps) => {
  return <TechsProvider>{children}</TechsProvider>;
};

export default Providers;
