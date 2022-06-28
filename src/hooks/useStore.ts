import {useContext} from 'react';
import RootContext from '../RootContext';
import RootStore from '../store/RootStore';

const useStore = () => {
  const context = useContext<RootStore>(RootContext);
  return context;
};

export default useStore;