import { useLocation } from '@reach/router';
import { parse } from 'qs';

export const useURLQuery = () => {
  const location = useLocation();
  const searchParams = parse(location.search, { ignoreQueryPrefix: true });

  return searchParams;
};
