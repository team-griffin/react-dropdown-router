import { useCallback } from 'react';
import useDropdownRouter from './useDropdownRouter';

export default () => {
  const router = useDropdownRouter();

  return useCallback(() => {
    router.actions.setPath(null);
  }, [ router.actions.setPath ]);
};
