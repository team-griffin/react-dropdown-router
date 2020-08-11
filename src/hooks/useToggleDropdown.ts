import { useCallback } from 'react';
import useDropdownRouter from './useDropdownRouter';

export default (path: string) => {
  const router = useDropdownRouter();

  return useCallback(() => {
    if (router.state.path === path) {
      router.actions.setPath(void 0);
    } else {
      router.actions.setPath(path);
    }
  }, [ router.state.path, router.actions.setPath, path ]);
};
