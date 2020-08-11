 
import React, { useMemo, Fragment, ReactElement, ReactNode, ReactChildren } from 'react';
import type { DropdownRouterContextValue } from '../types';
import useDropdownouter from '../hooks/useDropdownRouter';

interface Props {
  path: string,
  children: ReactNode,
}

const DropdownRoute = (props: Props) => {
  const router = useDropdownouter();

  const canRender = useMemo(() => {
    if (router.state.path == null) {
      return false;
    }
    if (router.state.path === props.path) {
      return true;
    }
    return false;
  }, [ props.path, router.state.path ]);

  if (!canRender) {
    return null;
  }

  return (
    <>
      {props.children}
    </>
  );
};

export default DropdownRoute;
