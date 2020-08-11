import { useCallback } from 'react';
import useDropdownRouter from './useDropdownRouter';

export default (path: string) => {
  const router = useDropdownRouter();

  return useCallback(() => {
    router.actions.setPath(path);
  }, [ path, router.actions.setPath ]);
};
