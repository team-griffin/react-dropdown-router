export interface DropdownRouterContextValue {
  state: {
    path: string,
  },
  actions: {
    setPath: (path: string) => void,
  },
}
