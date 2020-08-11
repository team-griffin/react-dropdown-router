import useDropdownRouter from './useDropdownRouter';

export default (path: string) => {
  const router = useDropdownRouter();

  return path === router.state.path;
};
