import { createContext } from 'react';
import { DropdownRouterContextValue } from './types';

export const Context = createContext<DropdownRouterContextValue>(void 0);

export const Provider = Context.Provider;
