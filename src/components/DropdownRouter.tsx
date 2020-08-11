import React, { ReactChildren, useMemo, useState, ReactNode } from 'react';
import { Provider } from '../context';

interface Props {
  children: ReactNode,
}

const DropdownRouter = (props: Props) => {
  const [ path, setPath ] = useState(null);
  const state = useMemo(() => ({
    path,
  }), [ path ]);
  const actions = useMemo(() => ({
    setPath,
  }), [ setPath ]);
  const value = useMemo(() => ({
    state,
    actions,
  }), [ state, actions ]);

  return (
    <Provider value={value}>
      {props.children}
    </Provider>
  );
};

export default DropdownRouter;
