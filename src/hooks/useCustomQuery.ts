import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from "axios";
import instance from '../config';

interface IAuthenticatedQuery {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}

const useCustomQuery = ({ queryKey, url, config }: IAuthenticatedQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const { data } = await instance.get(url, config);
      return data;
    },
  });
};

export default useCustomQuery;
